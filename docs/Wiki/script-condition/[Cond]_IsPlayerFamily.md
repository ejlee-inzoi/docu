---
slug: "/Wiki/script-condition/Cond_IsPlayerFamily"
---

# [Cond]_IsPlayerFamily

Overview
==

* Checks whether the `BaseObject` lives on the same lot as the currently controlled player character.

Parameter
=========

| Params      | Description                                 |
|-------------|---------------------------------------------|
| BaseObject  | The object to check the condition for        |
| Command     | IsPlayerFamily                              |
| CompareType | Comparison type (Equal / NotEqual only)      |

Examples
========

| Example Description                                                      | BaseObject | Command          | CompareType | S1 | S2 | F1 | F2 | Prob |
|--------------------------------------------------------------------------|------------|-------------------|-------------|----|----|----|----|-------|
| If I live on the same lot as the currently controlled player character   | Self       | IsPlayerFamily    | Equal       |    |    |    |    |       |
| If I do NOT live on the same lot as the currently controlled player      | Self       | IsPlayerFamily    | NotEqual    |    |    |    |    |       |
