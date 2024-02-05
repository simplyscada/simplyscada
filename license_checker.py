import hashlib
import sys
import subprocess
import threading

def hash_text(text):
    # Хэширование текста с использованием MD5
    hashed_text = hashlib.md5(text.encode()).hexdigest()
    return hashed_text

def read_license_key_from_file(file_path):
    try:
        with open(file_path, 'r') as file:
            encrypted_license_key = file.read().strip()
        return encrypted_license_key
    except FileNotFoundError:
        print(f"File '{file_path}' not found.")
        return None

def check_license(entered_key, expected_key):
    # Проверка соответствия хэшей
    return entered_key == expected_key

def run_script(script_name):
    subprocess.run([sys.executable, script_name], creationflags=subprocess.CREATE_NEW_CONSOLE)

def main():
    # Ожидаемый лицензионный ключ (в зашифрованном виде)
    expected_license_key_hashed = "ee4307117ea7ce70428c1f0e286cc02a"
    # Чтение введенного ключа из файла
    entered_license_key_hashed = read_license_key_from_file("license/license.txt")

    # Проверка лицензии
    is_license_valid = check_license(entered_license_key_hashed, expected_license_key_hashed)

    # Запись результата в другой файл
    result_file_path = "license/license_validation_result.txt"
    with open(result_file_path, 'w') as result_file:
        result_file.write(str(is_license_valid))

    if is_license_valid:
        print("License is valid. Welcome!")
        files_to_run = ["MBclient.py", "app.py", "browser.py"]
        threads = []
        for file_to_run in files_to_run:
            thread = threading.Thread(target=run_script, args=(file_to_run,))
            threads.append(thread)
            thread.start()

        # Ожидание завершения всех потоков
        for thread in threads:
            thread.join()
    else:
        print("Invalid license key. Please check your key.")

if __name__ == "__main__":
    main()
