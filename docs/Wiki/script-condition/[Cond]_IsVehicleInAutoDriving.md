---
slug: "/Wiki/script-condition/Cond_IsVehicleInAutoDriving"
---

# [Cond]_IsVehicleInAutoDriving

Overview
==

* Checks whether the `BaseObject` is currently a **vehicle** in auto-driving (autopilot) mode.  
* The `BaseObject` must be a vehicle entity for this condition to apply.

Parameter
=========

| Params      | Description                                   |
|-------------|-----------------------------------------------|
| BaseObject  | The object to check (must be a vehicle)       |
| Command     | IsVehicleInAutoDriving                        |
| CompareType | Comparison type (Equal / NotEqual)            |

Examples
========

| Example Description                                                       | BaseObject | Command                  | CompareType | S1 | S2 | F1 | F2 |
|---------------------------------------------------------------------------|------------|---------------------------|-------------|----|----|----|----|
| If the script’s vehicle (Self) is auto-driving to a destination           | Self       | IsVehicleInAutoDriving    | Equal       |    |    |    |    |
| If the script’s vehicle (Self) is NOT auto-driving                        | Self       | IsVehicleInAutoDriving    | NotEqual    |    |    |    |    |
| If the target vehicle is auto-driving                                     | Target     | IsVehicleInAutoDriving    | Equal       |    |    |    |    |
| If the target vehicle is NOT auto-driving                                 | Target     | IsVehicleInAutoDriving    | NotEqual    |    |    |    |    |
