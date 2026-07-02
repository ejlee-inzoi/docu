---
slug: "/Wiki/script-condition/Cond_IsDriver"
---

# [Cond]_IsDriver

Overview
==

* Checks whether the character (Joy) corresponding to the BaseObject is currently seated in the driver’s seat.

Parameter
=========

| Params      | Description                                |
|-------------|--------------------------------------------|
| BaseObject  | The object to check the condition for       |
| Command     | IsDriver                                   |
| CompareType | Comparison type (Equal / NotEqual)         |

Examples
========

| Example Description                                               | BaseObject | Command  | CompareType | S1 | S2 | F1 | F2 |
|-------------------------------------------------------------------|------------|----------|-------------|----|----|----|----|
| If the script's executing character (Self) is in the driver seat | Self       | IsDriver | Equal       |    |    |    |    |
| If the script's executing character (Self) is NOT in the driver seat | Self    | IsDriver | NotEqual    |    |    |    |    |
| If the script target character (Target) is in the driver seat    | Target     | IsDriver | Equal       |    |    |    |    |
| If the script target character (Target) is NOT in the driver seat| Target     | IsDriver | NotEqual    |    |    |    |    |
