---
slug: "/Wiki/script-condition/Exec_RemoveState"
---

# [Exec]_RemoveState

Overview
==

* A script that removes a state from a GameObject.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | RemoveState |
| S1 | State Group ID |
| S2 | State name within the group |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Remove the "Fire" state from the target's "Fire" state group and switch to "Normal" | Target | RemoveState | Fire | Fire |  |  |  |
