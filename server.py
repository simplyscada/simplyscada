from MBclient import read_modbus_values
from threading import Timer
from flask import Flask, render_template, jsonify, request
from pyModbusTCP.client import ModbusClient
import webbrowser
from threading import Timer, Thread

app = Flask(__name__)

# Создание клиента Modbus TCP (по умолчанию)
modbus_client = ModbusClient()

# Функция открытия браузера через 3 секунды
def open_browser():
    webbrowser.open('http://127.0.0.1:5000/')

Timer(3, open_browser).start()


@app.route('/send_command', methods=['POST'])
def send_command():
    try:
        # Получение значений команды и IP-адреса из запроса
        data = request.get_json()
        modbus_ip = data.get('modbusIP', '127.0.0.44')
        command_value = int(data['commandValue'])

        # Создание и подключение к клиенту Modbus TCP
        modbus_client = ModbusClient(host=modbus_ip, port=502, auto_open=True, debug=True)

        if not modbus_client.is_open():
            modbus_client.open()

        # Отправка команды управления в регистр Modbus (регистр 10)
        modbus_client.write_single_register(10, command_value)

        return jsonify(success=True, message='Команда успешно отправлена')
    except Exception as e:
        return jsonify(success=False, error=str(e))
    finally:
        # Закрытие соединения
        modbus_client.close()

if __name__ == '__main__':
    app.run(debug=True)
