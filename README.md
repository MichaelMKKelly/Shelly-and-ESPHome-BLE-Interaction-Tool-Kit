# Shelly-and-ESPHome-BLE-Interaction-Tool-Kit
A selection of configurations for having Shelly and ESPHome devices interaction directly over BLE.

## Shelly Relay Input Announcer
A config to have a shelly relay send a change of state of an input via BLE which an ESPHome device then picks up and uses it to trigger actions.

This is for having a switch in detached mode so power can be maintained to a ESPHome smart bulb but an input switch can still control the bulb directly without any intermediary service such as Home Assistant.