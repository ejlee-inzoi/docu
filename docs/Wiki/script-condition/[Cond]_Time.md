---
slug: "/Wiki/script-condition/Cond_Time"
---

# [Cond]_Time

Overview
==

* A condition command that checks whether the current in-game time (based on today's date) has passed a specific hour and minute.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | The object to check the condition against |
| Command | Time |
| CompareType | Comparison operator type |
| F1 | Hour (0~23) |
| F2 | Minute (0~59) |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| If the current time is 14:30 or later | Self | Time | GreaterOrEqual |  |  | 14 | 30 |
| If the current time is before 11:00 | Self | Time | Less |  |  | 11 | 0 |
