---
slug: "/Wiki/script-execution/Exec_AddLifeTrigger"
---

# [Exec]_AddLifeTrigger

Overview
==

* A script that adds a LifeTrigger.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | AddLifeTrigger |
| S1 | LifeTrigger Data Table ID |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Add an aging death trigger to myself | Self | AddLifeTrigger | Aging |  |  |  |  |
| Add a fire death trigger to the target | Target | AddLifeTrigger | Fire |  |  |  |  |
