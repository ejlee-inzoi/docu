---
slug: "/Wiki/script-execution/Exec_SetClothWeatheringIntensity"
---

# [Exec]_SetClothWeatheringIntensity

Overview
==

* Applies clothing weathering intensity.  
* NPCs are not affected by weathering.

Details
==

| Parameter   | Description                            |
|-------------|----------------------------------------|
| BaseObject  | Object to execute the command          |
| Command     | SetClothWeatheringIntensity            |
| F1          | Weathering Intensity to apply (0.0 ~ 1.0) |

Examples
==

| Example                             | BaseObject | Command                    | S1 | S2 | F1  | F2 | Prob |
|-------------------------------------|------------|-----------------------------|----|----|-----|----|------|
| Make my outfit completely clean     | Self       | SetClothWeatheringIntensity |    |    | 0   |    |      |
| Make my outfit 90% dirty            | Self       | SetClothWeatheringIntensity |    |    | 0.9 |    |      |
