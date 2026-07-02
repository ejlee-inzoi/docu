---
slug: "/Wiki/script-condition/Cond_IsBabyBeingHeld"
---

# [Cond]_IsBabyBeingHeld

Overview
==

* Checks whether the character is currently holding a baby.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | IsBabyBeingHeld                          |
| CompareType | Type of comparison                       |
| S1          | -                                        |
| S2          | -                                        |
| F1          | -                                        |
| F2          | -                                        |

Examples
========

| Example Description                          | BaseObject | Command           | CompareType | S1 | S2 | F1 | F2 |
|----------------------------------------------|------------|--------------------|-------------|----|----|----|----|
| If Self is not holding a baby                | Self       | IsBabyBeingHeld    | NotEqual    | -  |    |    |    |
| If Target is holding a baby                  | Target     | IsBabyBeingHeld    | Equal       | -  |    |    |    |
