---
slug: "/Wiki/script-condition/Cond_IsAnyVehicleSeatOccupied"
---

# [Cond]_IsAnyVehicleSeatOccupied

Overview
==

* Determines whether there is at least one occupant in the vehicle represented by BaseObject.  
* If BaseObject is a character, the check is performed on the vehicle they own.

Parameter
=========

| Params      | Description                                |
|-------------|--------------------------------------------|
| BaseObject  | The object to check the condition for       |
| Command     | IsAnyVehicleSeatOccupied                   |
| CompareType | Type of comparison (Equal / NotEqual)      |

Examples
========

| Example Description                                                            | BaseObject | Command                 | CompareType | S1 | S2 | F1 | F2 |
|--------------------------------------------------------------------------------|------------|--------------------------|-------------|----|----|----|----|
| If someone is currently in Self's owned vehicle                                | Self       | IsAnyVehicleSeatOccupied | Equal       |    |    |    |    |
| If no one is currently in the Target vehicle                                   | Target     | IsAnyVehicleSeatOccupied | NotEqual    |    |    |    |    |
