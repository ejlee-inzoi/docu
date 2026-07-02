---
slug: "/Wiki/script-condition/Cond_Obesity"
---

# [Cond]_Obesity

Overview
==

* Compares the current **obesity level** of the specified character.

Parameter
=========

| Params      | Description                               |
|-------------|-------------------------------------------|
| BaseObject  | The object to check the condition for      |
| Command     | Obesity                                    |
| CompareType | Comparison type (Equal, NotEqual, etc.)    |
| S1          | - (Not used)                              |
| F1          | Obesity value to compare (integer)         |

Examples
========

| Example Description                         | BaseObject | Command  | CompareType | S1 | S2 | F1 | F2 | Prob |
|---------------------------------------------|------------|----------|-------------|----|----|-----|-----|-------|
| If current obesity level is exactly 50      | Self       | Obesity  | Equal       |    |    | 50  |     |       |
| If current obesity level is NOT 50          | Self       | Obesity  | NotEqual    |    |    | 50  |     |       |
| If current obesity level is greater than 50 | Self       | Obesity  | Greater     |    |    | 50  |     |       |
