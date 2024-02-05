from MBclient import read_modbus_values
from threading import Timer
from flask import Flask, render_template, jsonify, request
from pyModbusTCP.client import ModbusClient
import webbrowser
from threading import Timer, Thread

app = Flask(__name__)


bit = True









@app.route('/')
def index():
    return render_template('index.html', bit = bit)

@app.route('/update_values', methods=['GET'])
def update_values():
    result1, result2, result3, result4, result5 = read_modbus_values()
    return jsonify(result1=result1, result2=result2, result3=result3, result4=result4, result5=result5)

@app.route('/set_values', methods=['POST'])
def set_value():
    adres = int(request.form.get('adres'))  # assuming the value is an integer
    if adres == 0:
        a = '127.0.0.44'
    elif adres == 1:
        a = '127.0.0.45'
    elif adres == 2:
        a = '127.0.0.46'
    elif adres == 3:
        a = '127.0.0.47'
    c = ModbusClient(host=a, port=502, auto_open=True, debug=False)
    global bit
    value = int(request.form.get('single_register_value'))  # assuming the value is an integer
    
    is_ok = c.write_single_register(0, value)  # Use register address 1
    if not is_ok:
        return 'Failed to write value to the register'

    bit = not bit
    return 'Value set successfully'


with open('license/license_validation_result.txt', 'r') as result_file:
    result_value_str = result_file.read()

# Преобразование строки в булево значение
result_value = bool(result_value_str)

if result_value:
    print("The result is True.")
    if __name__ == '__main__':
        app.run(debug=True)

else:
    print("The result is False.")



