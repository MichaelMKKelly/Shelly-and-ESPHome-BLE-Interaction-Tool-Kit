// Shelly Script: BLE Toggle Announcer
// ---------------------------------------------------------------
// Requires firmware >= 2.0.0 (BLE.advertiseOnce / BLE.AdvBuilder).
//
// Notes:
//   - `BLE` is a global object (NOT `Shelly.BLE`).
//   - `BLE.advertiseOnce()` broadcasts for ~3 seconds, then stops.
//   - Keep the payload small (BLE adv data is limited to 31 bytes).

// Build and broadcast a short advertisement carrying the new state.
// `label` is a short string such as "1", "0" or "init".


// Select your Input here
let InputToAnnounce  = "input:0";

function sendToggle(label) {
  BLE.AdvBuilder.reset();
  // A stable name so the advertisement is easy to identify.
  BLE.AdvBuilder.addName("ShellyToggle", true);
  // Carry the state as Shelly manufacturer data (0x0BA9 auto-prepended).
  BLE.AdvBuilder.addShellyManufacturerData("t" + label);
  var adv = BLE.AdvBuilder.build();
  var ok = BLE.advertiseOnce(adv);
  if (!ok) {
    console.log("BLE.advertiseOnce failed for label:", label);
  }
  return ok;
}

// Advertise once on boot so the ESPHome node can confirm it sees the Shelly.
sendToggle("init");

// Fire a BLE advertisement on every change of selected input.
Shelly.addStatusHandler(function (status) {
  if (status.component !== InputToAnnounce) {
    return;
  }
  var state = (status.delta && typeof status.delta.state !== "undefined")
    ? status.delta.state
    : (Shelly.getComponentStatus(InputToAnnounce) || {}).state;
  if (typeof state !== "boolean") {
    return; // input is not a stateful toggle (e.g. a button)
  }
  sendToggle(state ? "1" : "0");
});