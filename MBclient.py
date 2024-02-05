from pyModbusTCP.client import ModbusClient
from pyModbusTCP.server import ModbusServer
import time
import argparse
import logging



# init logging
logging.basicConfig()
# parse args
parser = argparse.ArgumentParser()
parser.add_argument('-H', '--host', type=str, default='localhost', help='Host (default:localhost)')
parser.add_argument('-p', '--port', type=int, default=502, help='TCP port (default: 502)')
parser.add_argument('-d', '--debug', action='store_true', help='set debug mode')
args = parser.parse_args()
# logging setup

# start modbus server
server = ModbusServer(host=args.host, port=args.port)


# IP-адрес и порт сервера Modbus TCP
modbus_ip1 = '127.0.0.44'
modbus_ip2 = '127.0.0.45'
modbus_ip3 = '127.0.0.46'
modbus_ip4 = '127.0.0.47'
modbus_ip5 = '127.0.0.48'
modbus_port = 502

# Создание клиента Modbus TCP
client1 = ModbusClient(host=modbus_ip1, port=modbus_port)
client2 = ModbusClient(host=modbus_ip2, port=modbus_port)
client3 = ModbusClient(host=modbus_ip3, port=modbus_port)
client4 = ModbusClient(host=modbus_ip4, port=modbus_port)
client5 = ModbusClient(host=modbus_ip5, port=modbus_port)

def read_modbus_values():
    try:
        # Установка соединения
        if client1.open() or client2.open() or client3.open() or client4.open() or client5.open():
            # Адрес регистра хранения для чтения
            register_address = 1

            # Чтение регистров хранения
            start_register_address = 0  # Регистр 1 (считаем с 0) соответствует адресу 1 в Modbus
            num_registers = 7


            result1 = client1.read_holding_registers(start_register_address, 1)
            result2 = client2.read_holding_registers(start_register_address, 1)
            result3 = client3.read_holding_registers(start_register_address, 1)
            result4 = client4.read_holding_registers(start_register_address, 1)
            result5 = client5.read_holding_registers(start_register_address, 4)
                
            

            return result1, result2, result3, result4, result5
        else:
            return None, None, None, None, None
    except Exception as e:
        print(f"Ошибка при обработке запроса: {e}")
        return None, None, None, None, None



if __name__ == "__main__" and license == 1:
    while True:
        result1, result2, result3, result4, result5 = read_modbus_values()

        if result1:
            value = result1[0]

            if value == 0:
                res1 = "Выключен"
            elif value == 1:
                res1 = "Работа в режиме МУ"
            elif value == 2:
                res1 = "Отключен в режиме ДУ"
            elif value == 3:
                res1 = "Работа в режиме ДУ"
            elif value == 4:
                res1 = "Неисправность"
            else:
                res1 =  "Нет связи"

        if result2:
            value = result2[0]

            if value == 0:
                res2 = "Выключен"
            elif value == 1:
                res2 = "Работа в режиме МУ"
            elif value == 2:
                res2 = "Отключен в режиме ДУ"
            elif value == 3:
                res2 = "Работа в режиме ДУ"
            elif value == 4:
                res2 = "Неисправность"
            else:
                res2 =  "Нет связи"

        if result3:
            value = result3[0]

            if value == 0:
                res3 = "Выключен"
            elif value == 1:
                res3 = "Работа в режиме МУ"
            elif value == 2:
                res3 = "Отключен в режиме ДУ"
            elif value == 3:
                res3 = "Работа в режиме ДУ"
            elif value == 4:
                res3 = "Неисправность"
            else:
                res3 =  "Нет связи"

        if result4:
            value = result4[0]

            if value == 0:
                res4 = "Выключен"
            elif value == 1:
                res4 = "Работа в режиме МУ"
            elif value == 2:
                res4 = "Отключен в режиме ДУ"
            elif value == 3:
                res4 = "Работа в режиме ДУ"
            elif value == 4:
                res4 = "Неисправность"
            else:
                res4 =  "Нет связи"


        # Печать результатов
       
            if result1:
                result1 = result1
                print(f"Значения хоста {modbus_ip1}: {result1}")
            else:
                result1 = "Нет связи"
                print(f" {result1}")
            if result2:
                result2 = result2
                print(f"Значения хоста {modbus_ip2}: {result2}")
            else:
                result2 = "Нет связи"
                print(f" {result2}")
            if result3:
                result3 = result3
                print(f"Значения хоста {modbus_ip3}: {result3}")
            else:
                result3 = "Нет связи"
                print(f" {result3}")
            if result4:
                result4 = result4
                print(f"Значения хоста {modbus_ip4}: {result4}")
            else:
                result4 = "Нет связи"
                print(f" {result4}")
            if result5:
                result5 = result5
                print(f"Значения хоста {modbus_ip5}: {result5}")
            else:
                result5 = "Нет связи"
                print(f" {result5}")




