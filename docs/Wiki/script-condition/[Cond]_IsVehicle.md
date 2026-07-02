---
slug: "/Wiki/script-condition/Cond_IsVehicle"
---

# [Cond]_IsVehicle

Overview
==

* Determines whether the `BaseObject` is a vehicle object.

Parameter
=========

| Params      | Description                                   |
|-------------|-----------------------------------------------|
| BaseObject  | The object to check                           |
| Command     | IsVehicle                                     |
| CompareType | Comparison type (Equal / NotEqual)            |

Examples
========

| Example Description                                     | BaseObject | Command    | CompareType | S1 | S2 | F1 | F2 |
|---------------------------------------------------------|------------|------------|-------------|----|----|----|----|
| If the script executor (Self) is a vehicle              | Self       | IsVehicle  | Equal       |    |    |    |    |
| If the script executor (Self) is not a vehicle          | Self       | IsVehicle  | NotEqual    |    |    |    |    |
| If the script target (Target) is a vehicle              | Target     | IsVehicle  | Equal       |    |    |    |    |
| If the script target (Target) is not a vehicle          | Target     | IsVehicle  | NotEqual    |    |    |    |    |
