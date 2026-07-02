---
slug: "/Wiki/script-condition/Cond_Posture"
---

# [Cond]_Posture

Overview
==

* Checks the current **posture** of the avatar.

Parameter
=========

| Params      | Description                                                            |
|-------------|------------------------------------------------------------------------|
| BaseObject  | The object to evaluate (typically Self or Target)                      |
| Command     | Posture                                                                |
| CompareType | Type of comparison (Equal / NotEqual, etc.)                            |
| S1          | Posture type to compare:<br>• Stand<br>• Sit<br>• Sleep<br>• Vehicle<br>• Lay<br>• Carried |

Examples
========

| Example Description                              | BaseObject | Command  | CompareType | S1    | S2 | F1 | F2 |
|--------------------------------------------------|------------|----------|-------------|-------|----|----|----|
| If my posture is sitting                         | Self       | Posture  | Equal       | Sit   |    |    |    |
| If my posture is not sitting                     | Self       | Posture  | NotEqual    | Sit   |    |    |    |
| If my posture is standing                        | Self       | Posture  | Equal       | Stand |    |    |    |
