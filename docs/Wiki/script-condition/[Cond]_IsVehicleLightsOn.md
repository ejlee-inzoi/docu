---
slug: "/Wiki/script-condition/Cond_IsVehicleLightsOn"
---

# [Cond]_IsVehicleLightsOn

Overview
==

* Checks the state of a specific light on the vehicle referenced by `BaseObject`.  
* If `BaseObject` is a character (e.g., Joy), the check is performed on the vehicle the character is currently riding.

Parameter
=========

| Params      | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | The object to check (can be a vehicle or a character in a vehicle)         |
| Command     | IsVehicleLightsOn                                                           |
| CompareType | Comparison type (Equal / NotEqual)                                          |
| S1          | The light to check (use a value from `EB1VehicleLight`, e.g. RunningLights, HazzardLights, LeftTurnSignalLight, RightTurnSignalLight) |

Examples
========

| Example Description                                                                      | BaseObject | Command            | CompareType | S1                   | S2 | F1 | F2 |
|------------------------------------------------------------------------------------------|------------|---------------------|-------------|------------------------|----|----|----|
| If the vehicle that Self is riding has its running lights on                             | Self       | IsVehicleLightsOn   | Equal       | RunningLights          |    |    |    |
| If Self’s vehicle has the left turn signal light on                                      | Self       | IsVehicleLightsOn   | Equal       | LeftTurnSignalLight    |    |    |    |
