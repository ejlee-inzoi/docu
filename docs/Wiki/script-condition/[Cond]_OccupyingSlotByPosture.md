---
slug: "/Wiki/script-condition/Cond_OccupyingSlotByPosture"
---

# [Cond]_OccupyingSlotByPosture

Overview
==

* Checks whether the **Self** character is in a specific posture (`S1`) and is occupying the **slot** of the **Target object** using that posture.

Parameter
=========

| Params      | Description                                                                                                   |
|-------------|---------------------------------------------------------------------------------------------------------------|
| Command     | OccupyingSlotByPosture                                                                                        |
| CompareType | Behavior depends on comparison type:                                                                          |
|             | - **Equal**: Returns `true` only if Self's posture matches `S1` **and** the Target is occupied via that posture |
|             | - **NotEqual**: Returns `true` if posture does not match `S1`, or posture matches but Target is not the posture slot |
| S1          | Self character's posture type (`EB1PostureType`) to compare:<br>• Stand<br>• Sit<br>• Sleep<br>• Vehicle<br>• Lay<br>• Carried |

Examples
========

| Example Description                                                                 | BaseObject | Command                  | CompareType | S1  | S2 | F1 | F2 |
|-------------------------------------------------------------------------------------|------------|---------------------------|-------------|-----|----|----|----|
| If Self is in `Sit` posture and Target is the posture target                       | Self       | OccupyingSlotByPosture    | Equal       | Sit |    |    |    |
| If Self is NOT in `Sit` posture, or is in `Sit` but Target is not the posture slot | Self       | OccupyingSlotByPosture    | NotEqual    | Sit |    |    |    |
