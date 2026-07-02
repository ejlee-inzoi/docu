---
slug: "/Wiki/script-condition/Cond_VehiclePartState"
---

# [Cond]_VehiclePartState

Overview
==

* Checks whether a specific part of a vehicle—either the BaseObject itself or a vehicle the BaseObject is using—is in a specific state.

Parameter
=========

| **Params** | **Description** |
| --- | --- |
| BaseObject | The object to check the condition against. If the object is a character and not a vehicle, the condition targets the vehicle the character is using. |
| Command | VehiclePartState |
| CompareType | Comparison operator type (Equal, NotEqual) |
| S1 | Name of the vehicle part (`EB1VehiclePartType`) |
| S2 | State of the vehicle part to compare |

Example
==

| **Example** | **BaseObject** | **Command** | **CompareType** | **S1** | **S2** | **F1** | **F2** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| If the Trunk part of the target vehicle is Open | Target | VehiclePartState | Equal | Trunk | Open |  |  |
| If the DriverWindow part of the target vehicle is not Close | Target | VehiclePartState | NotEqual | DriverWindow | Close |  |  |
