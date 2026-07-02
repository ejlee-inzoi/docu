---
slug: "/Wiki/script-execution/Exec_PlayFX"
---

# [Exec]_PlayFX

Overview
==

* Plays a visual effect (FX) based on the FX Blueprint defined in `Fx.json`.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command (Self or Target) |
| Command | PlayFX |
| S1 | FX ID defined in `Fx.json` |

Example
==

| Example | BaseObject | Command | S1 |
| --- | --- | --- | --- |
| Play the "GrowthStepUp" FX on myself | Self | PlayFX | GrowthStepUp |
