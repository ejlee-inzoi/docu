---
slug: "/Wiki/script-condition/Cond_Muscle"
---

# [Cond]_Muscle

Overview
==

* Compares the current **muscle mass** value of the specified character.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | Muscle                                   |
| CompareType | Type of comparison (Equal, NotEqual, etc.)|
| S1          | - (Not used)                             |
| F1          | Muscle value to compare (integer)         |

Examples
========

| Example Description                         | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 | Prob |
|---------------------------------------------|------------|---------|-------------|----|----|-----|-----|-------|
| If current muscle value is exactly 50       | Self       | Muscle  | Equal       |    |    | 50  |     |       |
| If current muscle value is NOT 50           | Self       | Muscle  | NotEqual    |    |    | 50  |     |       |
| If current muscle value is greater than 50  | Self       | Muscle  | Greater     |    |    | 50  |     |       |
