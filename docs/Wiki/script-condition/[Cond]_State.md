---
slug: "/Wiki/script-condition/Cond_State"
---

# [Cond]_State

Overview
==

* A condition command that checks the state of the target object.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | The object to check the condition against |
| Command | State |
| CompareType | Comparison operator type (Equal, NotEqual) |
| S1 | StateGroup ID of the target (from StateVariation.json) |
| S2 | State ID within the group specified by S1 to compare against |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| If the target is in a broken state | target | State | Equal | Broken | Broken |  |  |
| If the target is not in a broken state | target | State | NotEqual | Broken | Broken |  |  |
| If the target is on fire | target | State | Equal | Fire | Fire |  |  |
|  |  |  |  |  |  |  |  |
