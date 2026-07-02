---
slug: "/Wiki/script-condition/Cond_IsPlayerFamilyAndFamilyTree"
---

# [Cond]_IsPlayerFamilyAndFamilyTree

Overview
==

* Checks whether the `BaseObject` lives on the same lot as the currently controlled player character **and** shares the same bloodline (i.e., belongs to the same family tree).

Parameter
=========

| Params      | Description                                         |
|-------------|-----------------------------------------------------|
| BaseObject  | The object to check the condition for               |
| Command     | IsPlayerFamilyAndFamilyTree                         |
| CompareType | Comparison type (Equal / NotEqual only)             |

Examples
========

| Example Description                                                                 | BaseObject | Command                         | CompareType | S1 | S2 | F1 | F2 | Prob |
|-------------------------------------------------------------------------------------|------------|----------------------------------|-------------|----|----|----|----|-------|
| If I live on the same lot as the player and have a blood relationship              | Self       | IsPlayerFamilyAndFamilyTree     | Equal       |    |    |    |    |       |
| If I either do NOT live on the same lot as the player or am NOT blood-related      | Self       | IsPlayerFamilyAndFamilyTree     | NotEqual    |    |    |    |    |       |
