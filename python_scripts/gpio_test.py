import RPi.GPIO
import time

off = True
on = False

RPi.GPIO.setwarnings(False)

# Read pins based on GPIO
RPi.GPIO.setmode(RPi.GPIO.BCM)

# Initalize all pins to be OUTPUT
RPi.GPIO.setup(2, RPi.GPIO.OUT)
RPi.GPIO.setup(3, RPi.GPIO.OUT)
RPi.GPIO.setup(4, RPi.GPIO.OUT)
RPi.GPIO.setup(5, RPi.GPIO.OUT)
RPi.GPIO.setup(6, RPi.GPIO.OUT)
RPi.GPIO.setup(7, RPi.GPIO.OUT)
RPi.GPIO.setup(8, RPi.GPIO.OUT)
RPi.GPIO.setup(9, RPi.GPIO.OUT)

# Turn OFF all relays
print("Turn off all relays")
RPi.GPIO.output(2, off)
RPi.GPIO.output(3, off)
RPi.GPIO.output(4, off)
RPi.GPIO.output(5, off)
RPi.GPIO.output(6, off)
RPi.GPIO.output(7, off)
RPi.GPIO.output(8, off)
RPi.GPIO.output(9, off)
time.sleep(2)

while True:
        print("Relay 1: ON")
        RPi.GPIO.output(2, on)
        time.sleep(0.5)
        print("Relay 1: OFF")
        RPi.GPIO.output(2, off)
        time.sleep(0.5)

        print("Relay 2: ON")
        RPi.GPIO.output(3, on)
        time.sleep(0.5)
        print("Relay 2: OFF")
        RPi.GPIO.output(3, off)
        time.sleep(0.5)

        print("Relay 3: ON")
        RPi.GPIO.output(4, on)
        time.sleep(0.5)
        print("Relay 3: OFF")
        RPi.GPIO.output(4, off)
        time.sleep(0.5)

        print("Relay 4: ON")
        RPi.GPIO.output(5, on)
        time.sleep(0.5)
        print("Relay 4: OFF")
        RPi.GPIO.output(5, off)
        time.sleep(0.5)

        print("Relay 5: ON")
        RPi.GPIO.output(6, on)
        time.sleep(0.5)
        print("Relay 5: OFF")
        RPi.GPIO.output(6, off)
        time.sleep(0.5)
        
        print("Relay 6: ON")
        RPi.GPIO.output(7, on)
        time.sleep(0.5)
        print("Relay 6: OFF")
        RPi.GPIO.output(7, off)
        time.sleep(0.5)

        print("Relay 7: ON")
        RPi.GPIO.output(8, on)
        time.sleep(0.5)
        print("Relay 7: OFF")
        RPi.GPIO.output(8, off)
        time.sleep(0.5)

        print("Relay 8: ON")
        RPi.GPIO.output(9, on)
        time.sleep(0.5)
        print("Relay 8: OFF")
        RPi.GPIO.output(9, off)
        time.sleep(0.5)
        
