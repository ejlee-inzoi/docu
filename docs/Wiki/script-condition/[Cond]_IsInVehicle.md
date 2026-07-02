---
slug: "/Wiki/script-condition/Cond_IsInVehicle"
---

# [Cond]_IsInVehicle

Overview
==

* Checks whether the `BaseObject` is currently inside a vehicle.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | IsInVehicle                              |
| CompareType | Comparison type (Equal / NotEqual)       |

Examples
========

| Example Description                               | BaseObject | Command      | CompareType | S1 | S2 | F1 | F2 |
|---------------------------------------------------|------------|---------------|-------------|----|----|----|----|
| If my character (Self) is in a vehicle            | Self       | IsInVehicle   | Equal       |    |    |    |    |
| If my character (Self) is not in a vehicle        | Self       | IsInVehicle   | NotEqual    |    |    |    |    |
| If the target character is in a vehicle           | Target     | IsInVehicle   | Equal       |    |    |    |    |
| If the target character is not in a vehicle       | Target     | IsInVehicle   | NotEqual    |    |    |    |    |
