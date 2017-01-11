"""Return the temperature"""

import time
import serial

SER = serial.Serial('/dev/ttyACM0', 9600)
while not SER:
    time.sleep(1)

SER.write('getTemp')
TEMP = SER.readline()

SER.close()
print TEMP
