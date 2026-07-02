---
slug: "/Wiki/script-condition/Cond_IsVehicleInParkingPlace"
---

# [Cond]_IsVehicleInParkingPlace

Overview
==

* Checks whether the specified vehicle is currently parked in a designated parking area.  
* If `BaseObject` is `Self` and refers to a character, it will use the vehicle owned by that character.

Parameter
=========

| Params      | Description                                                                             |
|-------------|-----------------------------------------------------------------------------------------|
| BaseObject  | The vehicle to check, or a character who owns the vehicle (Self/Target)                |
| Command     | IsVehicleInParkingPlace                                                                |
| CompareType | Comparison type (Equal / NotEqual)                                                     |

Examples
========

| **Example Description**                          | [Condition]           |         |         |
|--------------------------------------------------|------------------------|---------|---------|
| BaseObject                                       | Command                | CompareType |
| Is the vehicle (Target) NOT in a parking place?  | Target                 | IsVehicleInParkingPlace | NotEqual |
