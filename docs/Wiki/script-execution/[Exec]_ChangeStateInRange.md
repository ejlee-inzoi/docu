---
slug: "/Wiki/script-execution/Exec_ChangeStateInRange"
---

# [Exec]_ChangeStateInRange

Overview
==

* Changes the state of all GameObjects within a specified range.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object from which the range is calculated |
| Command | ChangeStateInRange |
| F1 | Range (in centimeters) |
| S1 | State Group ID (from StateVariation.json) |
| S2 | State name within the group to apply |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Change the "Fire" state group to "Fire" for all GameObjects within 50cm of the target | Target | ChangeStateInRange | Fire | Fire | 50 |  |  |
| Change the "Fire" state group to "None" for all GameObjects within 100cm of myself | Self | ChangeStateInRange | Fire | None | 100 |  |  |
