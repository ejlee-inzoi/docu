---
slug: "/Wiki/script-execution/Exec_PlaySound2D"
---

# [Exec]_PlaySound2D

Overview
==

* Plays a 2D sound only if the BaseObject is the currently controlled player character.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | PlaySound2D |
| S1 | Sound ID from the `AudioResources` table |

Example
==

| Example | BaseObject | Command | S1 |
| --- | --- | --- | --- |
| Play the "Goal_Change" sound | Self | PlaySound2D | Goal_Change |
