---
slug: "/Wiki/script-condition/Cond_IsPlayerFamilyTree"
---

# [Cond]_IsPlayerFamilyTree

Overview
==

* Checks whether the `BaseObject` shares the same family tree (blood relationship) with the currently controlled player character.

Parameter
=========

| Params      | Description                                       |
|-------------|---------------------------------------------------|
| BaseObject  | The object to check the condition for             |
| Command     | IsPlayerFamilyTree                                |
| CompareType | Comparison type (Equal / NotEqual only)           |

Examples
========

| Example Description                                         | BaseObject | Command              | CompareType | S1 | S2 | F1 | F2 | Prob |
|-------------------------------------------------------------|------------|-----------------------|-------------|----|----|----|----|-------|
| If I am blood-related to the currently controlled character | Self       | IsPlayerFamilyTree    | Equal       |    |    |    |    |       |
| If I am NOT blood-related to the currently controlled character | Self    | IsPlayerFamilyTree    | NotEqual    |    |    |    |    |       |
