---
slug: "/Wiki/script-condition/Cond_OccupyingConnectedChairByPosture"
---

# [Cond]_OccupyingConnectedChairByPosture

Overview
==

* Checks whether the **Self** character is occupying a chair (via posture) that is **connected to the parent of the Target object**.  
* Example: The interaction target is a computer, and this condition checks whether the Self character is sitting in a chair that is connected to that computer.

Parameter
=========

| Params      | Description                                                                                                                                                 |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BaseObject  | The object to check the condition for                                                                                                                       |
| Command     | OccupyingConnectedChairByPosture                                                                                                                             |
| CompareType | Must be `Equal`: Returns `true` if the Self character's posture matches `S1` **and** the chair connected to the target is being used with that posture. <br>All other `CompareType` values return `false`. |
| S1          | Posture type of the Self character to check (`EB1PostureType`):<br>• Stand<br>• Sit<br>• Sleep<br>• Vehicle<br>• Lay<br>• Carried                          |

Examples
========

| Example Description                                                                                     | BaseObject | Command                        | CompareType | S1  | S2 | F1 | F2 |
|---------------------------------------------------------------------------------------------------------|------------|----------------------------------|-------------|-----|----|----|----|
| If Self's posture is `Sit` and the chair connected to the Target object is being used with that posture | Self       | OccupyingConnectedChairByPosture | Equal       | Sit |    |    |    |
