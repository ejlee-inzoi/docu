---
slug: "/Wiki/script-condition/Cond_MainPerspective"
---

# [Cond]_MainPerspective

Overview
==

* Checks whether the main **perspective/value system** of the character matches the one specified in `S1`.

Parameter
=========

| Params      | Description                                |
|-------------|--------------------------------------------|
| BaseObject  | The object to check (Self or Target)       |
| Command     | MainPerspective                            |
| CompareType | Type of comparison                         |
| S1          | Perspective value to compare (e.g., Conservation) |
| S2          | Unused                                      |

Examples
========

| Example Description                                        | BaseObject | Command         | CompareType | S1           | S2   | F1 | F2 |
|------------------------------------------------------------|------------|------------------|-------------|--------------|------|----|----|
| If the main perspective is equal to `Conservation`         | Self       | MainPerspective  | Equal       | Conservation | None |    |    |
