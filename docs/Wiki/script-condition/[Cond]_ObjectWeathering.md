---
slug: "/Wiki/script-condition/Cond_ObjectWeathering"
---

# [Cond]_ObjectWeathering

Overview
==

* Compares the **weathering grade** of a game object.  
* This value typically represents how worn or aged the object is.

Parameter
=========

| Params      | Description                                |
|-------------|--------------------------------------------|
| BaseObject  | The object to check                        |
| Command     | ObjectWeathering                           |
| CompareType | Type of comparison (Equal, Less, etc.)     |
| S1          | - (Unused)                                 |
| S2          | - (Unused)                                 |
| F1          | Weathering grade value to compare          |
| F2          | - (Unused)                                 |

Examples
========

| Example Description                                         | BaseObject | Command          | CompareType | S1 | S2 | F1 | F2 |
|-------------------------------------------------------------|------------|-------------------|-------------|----|----|----|----|
| If Self's object has a weathering grade less than 2         | Self       | ObjectWeathering  | Less        | -  |    | 2  |    |
| If Target's object has a weathering grade equal to 1        | Target     | ObjectWeathering  | Equal       | -  |    | 1  |    |
