---
slug: "/Wiki/script-condition/Cond_VehicleSpeed"
---

# [Cond]_VehicleSpeed

Overview
==

* Compares the speed of a vehicle against the value specified in F1.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | Self/Target vehicle |
| Command | VehicleSpeed |
| CompareType | Comparison operator type |
| F1 | Speed value |

Example
==

| **Example** | [Condition] | | |  |
| --- | --- | --- | --- | --- |
| BaseObject | Command | CompareType | F1 |
| Is the speed of the vehicle (Target) less than or equal to 10? | Target | VehicleSpeed | LessOrEqual | 10 |
