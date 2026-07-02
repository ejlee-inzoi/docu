---
slug: "/Wiki/script-condition/Cond_HomeCleanliness"
---

# [Cond]_HomeCleanliness

Overview
==

* Checks the cleanliness level of Joy's home lot.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | HomeCleanliness                          |
| CompareType | Type of comparison                       |
| F1          | Cleanliness value (range: 0 ~ 2)         |
|             |                                          |

Examples
========

| Example Description                                 | BaseObject | Command         | CompareType | S1 | S2 | F1  | F2 |
|-----------------------------------------------------|------------|------------------|-------------|----|----|-----|----|
| If Joy's home cleanliness is greater than 1         | Self       | HomeCleanliness  | Greater     |    |    | 1   |    |
| If Joy's home cleanliness is greater than 0.5       | Self       | HomeCleanliness  | Greater     |    |    | 0.5 |    |
| If Joy's home cleanliness is exactly 0              | Self       | HomeCleanliness  | Equal       |    |    | 0   |    |
