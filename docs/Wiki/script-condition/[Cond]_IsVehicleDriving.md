---
slug: "/Wiki/script-condition/Cond_IsVehicleDriving"
---

# [Cond]_IsVehicleDriving

Overview
==

* Checks whether the vehicle the `BaseObject` (character) is riding is currently in motion.  
* The condition returns `True` if the vehicle has any speed.  
* If the character is not riding a vehicle or the vehicle is stationary, it returns `False`.

Parameter
=========

| Params      | Description                                   |
|-------------|-----------------------------------------------|
| BaseObject  | The character to evaluate (Self / Target)     |
| Command     | IsVehicleDriving                              |
| CompareType | Comparison type (Equal / NotEqual)            |

Examples
========

| Example Description                                                       | BaseObject | Command           | CompareType | S1 | S2 | F1 | F2 |
|---------------------------------------------------------------------------|------------|--------------------|-------------|----|----|----|----|
| If the vehicle the character (Self) is riding is currently moving         | Self       | IsVehicleDriving   | Equal       |    |    |    |    |
| If the vehicle the character (Self) is riding is NOT moving               | Self       | IsVehicleDriving   | NotEqual    |    |    |    |    |
| If the vehicle the target character is riding is currently moving         | Target     | IsVehicleDriving   | Equal       |    |    |    |    |
| If the vehicle the target character is riding is NOT moving               | Target     | IsVehicleDriving   | NotEqual    |    |    |    |    |
