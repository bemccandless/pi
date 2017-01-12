"""Return the temperature"""

import sys
import time
import serial

SER = serial.Serial('/dev/ttyACM0', 9600)
time.sleep(2)

SER.write('getTemp')
time.sleep(1)
TEMP = SER.readline()
time.sleep(1)

print TEMP
sys.stdout.flush()

