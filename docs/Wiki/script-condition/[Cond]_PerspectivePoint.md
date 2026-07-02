---
slug: "/Wiki/script-condition/Cond_PerspectivePoint"
---

# [Cond]_PerspectivePoint

Overview
==

* Compares the **point value** of a specific perspective (value system) `S1` against a threshold `F1` using `CompareType`.

Parameter
=========

| Params      | Description                                |
|-------------|--------------------------------------------|
| BaseObject  | The object to evaluate (Self or Target)     |
| Command     | PerspectivePoint                            |
| CompareType | Type of comparison                          |
| S1          | Perspective ID to check (e.g., Conservation)|
| F1          | Value to compare against                    |

Examples
========

| Example Description                                                       | BaseObject | Command           | CompareType     | S1           | S2   | F1   | F2 |
|---------------------------------------------------------------------------|------------|--------------------|------------------|--------------|------|------|----|
| If the Conservation perspective score is greater than or equal to 60.0   | Self       | PerspectivePoint   | GreaterOrEqual   | Conservation | None | 60.0 | 0  |
