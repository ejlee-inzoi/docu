---
slug: "/Wiki/script-condition/Cond_TimeRange"
---

# [Cond]_TimeRange

Overview
==

* A condition command that checks whether the current in-game time falls within a specific time range.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | The object to check the condition against |
| Command | TimeRange |
| CompareType | Comparison operator type (only Equal/NotEqual) |
| F1 | Start time (0000~2359) |
| F2 | End time (0000~2359) |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| If the current time is between 08:00 and 18:00 | Self | TimeRange | Equal |  |  | 0800 | 1800 |
| If the current time is between 23:00 and 04:00 | Self | TimeRange | Equal |  |  | 2300 | 0400 |
