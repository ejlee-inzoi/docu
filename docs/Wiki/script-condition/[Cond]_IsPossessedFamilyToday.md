---
slug: "/Wiki/script-condition/Cond_IsPossessedFamilyToday"
---

# [Cond]_IsPossessedFamilyToday

Overview
==

* Checks whether the `BaseObject` was possessed (i.e., directly controlled) as a family member at any time during the current day.

Parameter
=========

| Params      | Description                                |
|-------------|--------------------------------------------|
| BaseObject  | The object to check the condition for       |
| Command     | IsPossessedFamilyToday                     |
| CompareType | Comparison type (Equal / NotEqual)          |
| S1          | -                                          |
| F1          | -                                          |

Examples
========

| Example Description                                    | BaseObject | Command                 | CompareType | S1 | S2 | F1 | F2 | Prob |
|--------------------------------------------------------|------------|--------------------------|-------------|----|----|----|----|-------|
| If this character has been possessed as a family member today     | Self       | IsPossessedFamilyToday   | Equal       |    |    |    |    |       |
| If this character has NOT been possessed as a family member today | Self       | IsPossessedFamilyToday   | NotEqual    |    |    |    |    |       |
