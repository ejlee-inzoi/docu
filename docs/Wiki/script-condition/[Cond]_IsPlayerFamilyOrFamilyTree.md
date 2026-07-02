---
slug: "/Wiki/script-condition/Cond_IsPlayerFamilyOrFamilyTree"
---

# [Cond]_IsPlayerFamilyOrFamilyTree

Overview
==

* Checks whether the `BaseObject` either lives on the same lot as the currently controlled player character **or** shares a blood relationship (same family tree).

Parameter
=========

| Params      | Description                                         |
|-------------|-----------------------------------------------------|
| BaseObject  | The object to check the condition for               |
| Command     | IsPlayerFamilyOrFamilyTree                          |
| CompareType | Comparison type (Equal / NotEqual only)             |

Examples
========

| Example Description                                                                      | BaseObject | Command                       | CompareType | S1 | S2 | F1 | F2 | Prob |
|------------------------------------------------------------------------------------------|------------|-------------------------------|-------------|----|----|----|----|-------|
| If I either live on the same lot as the player or am blood-related                      | Self       | IsPlayerFamilyOrFamilyTree    | Equal       |    |    |    |    |       |
| If I neither live with the player nor share a blood relationship                        | Self       | IsPlayerFamilyOrFamilyTree    | NotEqual    |    |    |    |    |       |
