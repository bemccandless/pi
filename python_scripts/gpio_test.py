import RPi.GPIO
import time

off = True
on = False

delay = 0.5

pins = [2,3,4,5,6,7,8,9]

RPi.GPIO.setwarnings(False)

# Read pins based on GPIO
RPi.GPIO.setmode(RPi.GPIO.BCM)

# Initalize all pins to be OUTPUT
# Turn OFF all relays
print("Turn off all relays")
for pin in pins:
        RPi.GPIO.setup(pin, RPi.GPIO.OUT)
        RPi.GPIO.output(pin, off)

time.sleep(1)

while True:
        for pin in pins:
                print("Relay %d: ON" % pin)
                RPi.GPIO.output(pin, on)
                time.sleep(delay)

                print("Relay %d: OFF" % pin)
                RPi.GPIO.output(pin, off)
                time.sleep(delay)