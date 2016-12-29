import serial;

ser = serial.Serial('/dev/ttyACM0')
temp = ser.readline()

print(temp)