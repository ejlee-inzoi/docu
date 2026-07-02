---
slug: "/Wiki/script-execution/Exec_ChangeState"
---

# [Exec]_ChangeState

Overview
==

* A script that changes the state of a GameObject.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | ChangeState |
| S1 | State Group ID |
| S2 | State name within the group to apply |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Change the target's "Fire" state group to "Fire" | Target | ChangeState | Fire | Fire |  |  |  |
| Change my "Fire" state group to "None" | Self | ChangeState | Fire | None |  |  |  |
