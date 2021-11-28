# HackCable
Arduino and ESP32 simulator (Wire components + emulate code)
Test the library here [https://clementgre.github.io/HackCable/](https://clementgre.github.io/HackCable/)

## Goals

- Offer a graphical interface to wire electronic component to board.
  - Using [Wokwi Elements](https://github.com/wokwi/wokwi-elements) for components definition/display 
  - and [Wokwi Boards](https://github.com/wokwi/wokwi-boards) for ESP32 board definition/display.
  - Using [Draw2D](http://www.draw2d.org) for the wiring system.
- Allow emulating code on these boards
  - Using [AVR8JS](https://github.com/wokwi/avr8js) for emulating the code on Arduino.
  
### Project structure

HackCable is coded in TypeScript, using Webpack + Babel.

The code is using only one npm configuration, but there is two webpack configuration files, and two main folders:
- ``src`` is the code of the library itself
- ``web`` is the website that allow to test the library, and to make an example of use. The ``:web`` tasks allow to use this part of the code, associated with the webpack config : ``webpack.config.web.js``.

# Tasks

TypeScript Type checking and generating

``type-check``

``type-check:watch``

``build:types``

Build the library itself

``build:src``

Build or start the live server of the web page that use the library

``build:web``

``serve:web``