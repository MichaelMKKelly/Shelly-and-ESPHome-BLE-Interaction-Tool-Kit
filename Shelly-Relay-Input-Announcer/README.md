# Purpose and Outline

This Works by running a script on the shelly relay that transmits a BLE announcement which can be detected by an ESPHome Device. The initial goal of this is to allow a relay to be in "detached mode" and keep power to a smart bulb then on a toggle of input can send a signal via BLE directly to the bulb to toggle state. This means you are not dependent on a intermediary service such as Home Assistant to send the command .

## Requirements:
- A shelly Relay that has bluetooth support and which has at least firmware version 2.0. Gen3+ devices should be fine but some Gen2 devices may also work if they meet the requirements.
- An ESPHome Device that supports bluetooth (e.g. ESP32).
- Know the mac address of the Shelly relay's bluetooth adaptor (Can be found in the WebUI)

## Shelly Relay Setup
- On the Shelly relay's WebUI go to the Scripts section and press on "Create script"
- Name the script something appropriate
- Paste in the contents of the file `shelly-relay-script.mjs` in this repo into the code section
- OPTIONAL: If required for multiple input devices then change the `InputToAnnounce` used from 0 to another
- Press Save
- Press Run
- Return to the main page of the scripts section
- Toggle on "Run on startup" for the script

This will have the relay send out the following announcements:
- `init` - Script first started (useful for debugging)
- `on` - When the selected input is set to On
- `off` - When the selected input is set to Off

## ESPhome Device Config

You now need to include the ESPHome config for this functionality to your devices config.

This can be done directly from this repo via remote package: