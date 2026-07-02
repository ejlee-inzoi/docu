---
slug: "/Wiki/script-execution/Exec_AddServiceUsage"
---

# [Exec]_AddServiceUsage

Overview
==

* Increases the usage amount of a utility service such as electricity or water.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | AddServiceUsage |
| S1 | Type of service: Electricity or Water |
| F1 | Amount of usage |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Use electricity | Self | AddServiceUsage | Electricity |  | 10 |  |  |
| Use water | Self | AddServiceUsage | Water |  | 2 |  |  |
