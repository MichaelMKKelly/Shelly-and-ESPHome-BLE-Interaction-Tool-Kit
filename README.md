# Shelly-and-ESPHome-BLE-Interaction-Tool-Kit
A selection of configurations for having Shelly and ESPHome devices interact directly over BLE.

## Using These Configs
You should always read and understand configs and scripts that you pull from the internet.

They are mostly designed for my personal usage, so may require adaptation for specific use cases.

## Shelly Relay Input Announcer
A config to have a Shelly relay send a change of state of an input via BLE, which an ESPHome device then picks up and uses to trigger actions.

This is for having a switch in detached mode, so power can be maintained to an ESPHome smart bulb, but an input switch can still control the bulb directly without any intermediary service such as Home Assistant.