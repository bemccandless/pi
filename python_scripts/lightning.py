import Rpi.GPIO as GPIO
import time

# VARIABLES
OFF = True
ON = False

lights = [2,3,4,5,6,7,8,9]

# MAIN
setup()
lightningStrike()

# FUNCTIONS
def setup():
    GPIO.setMode(GPIO.BCM)
    for light in lights:
        GPIO.setup(light, GPIO.OUT)

def switch(pin, output):
    GPIO.ouput(pin, output)

def lightningStorm():


def lightningStrike(light):
    switch(light, ON)
    time.sleep(random(0.1, 0.5))
    switch(light, OFF)
