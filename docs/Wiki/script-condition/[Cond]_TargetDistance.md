---
slug: "/Wiki/script-condition/Cond_TargetDistance"
---

# [Cond]_TargetDistance

Overview
==

* A condition command that evaluates the distance between Self and Target.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | Not used |
| Command | TargetDistance |
| CompareType | Comparison operator type (Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual) |
| F1 | Value to compare the distance between the two objects (used to determine if distance is within F1) |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Is the distance between me and the target within 5000? |  | TargetDistance |  |  |  | 5000 |  |
