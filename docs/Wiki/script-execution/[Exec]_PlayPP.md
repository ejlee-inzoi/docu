---
slug: "/Wiki/script-execution/Exec_PlayPP"
---

# [Exec]_PlayPP

Overview
==

* Triggers a PostProcess visual effect.  
* The effect is defined in the `DA_PostProcessMaterial` data asset, which specifies the Material Instance (MI) and the FloatCurve.  
* The X-axis of the FloatCurve represents time (Duration), and the Y-axis represents the scalar value applied to the material parameter.  
* A testing cheat is available using:  
  + `B2TestPPEffect` string (PPId)

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command (Self or Target) |
| Command | PlayPP |
| S1 | PPId defined in `DA_PostProcessMaterial` (e.g., `RadialBlur`) |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Play the RadialBlur PostProcess effect | Self | PlayPP | RadialBlur |  |  |  |  |
