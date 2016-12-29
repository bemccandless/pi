import Rpi.GPIO as GPIO
import time
import lightning

# VARIABLES
minute = 60

OFF = True
ON = False

volcano = 9

# MAIN
setup()
while (true):
    lightningStorm()
    eruption()
    time.sleep(random(minutes(20), minutes(45)))

# FUNCTIONS
def setup():
    GPIO.setMode(GPIO.BCM)
    GPIO.setup(volcano, GPIO.OUT)

def switch(pin, output):
    GPIO.ouput(pin, output)

def minutes(minute):
    return minute * 60

def eruption():
    switch(volcano, ON)
    time.sleep(random(10, 20))
    switch(volcano, OFF)
