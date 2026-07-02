---
slug: "/Wiki/script-execution/Exec_AddHowling"
---

# [Exec]_AddHowling

Overview
==

* A script that attaches a Howling effect to an Entity.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | AddHowling |
| S1 | Howling Data Table ID |
| S2 | HowlingEmitterType  
  * Base (Default Type)  
  * VehicleAccident  
  * Trend |
| F1 | Maximum number of Entities to receive the Howling effect |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Add Howling A to myself | Self | AddHowling | A |  |  |  |  |
| Add Howling B to myself, set type to Trend | Self | AddHowling | B | Trend |  |  |  |
| Add Howling C to myself, with a max of 5 affected entities | Self | AddHowling | C |  | 5 |  |  |
| Add Howling D to the target, set type to VehicleAccident and max affected entities to 10 | Target | AddHowling | D | VehicleAccident | 10 |  |  |
