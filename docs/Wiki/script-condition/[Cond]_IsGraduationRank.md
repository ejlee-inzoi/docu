---
slug: "/Wiki/script-condition/Cond_IsGraduationRank"
---

# [Cond]_IsGraduationRank

Overview
==

* Checks whether the character has graduated with a certain rank from the specified EducationType.

Parameter
=========

| Params      | Description                                              |
|-------------|----------------------------------------------------------|
| BaseObject  | The object to check the condition for                    |
| Command     | IsGraduationRank                                         |
| CompareType | Type of comparison                                       |
| S1          | EducationType (Elementary, Middle, High, College)        |
| F1          | Graduation rank (0–4)                                    |

Examples
========

| Example Description                                               | BaseObject | Command           | CompareType     | S1        | S2 | F1 | F2 |
|-------------------------------------------------------------------|------------|--------------------|------------------|-----------|----|----|----|
| If the character graduated from elementary school with an average rank | Self       | IsGraduationRank   | Equal            | Elementary|    | 2  |    |
| If the character graduated from high school                        | Self       | IsGraduationRank   | GreaterOrEqual   | High      |    | 0  |    |
| If the character graduated from middle school with a poor or lower rank | Self    | IsGraduationRank   | LessOrEqual      | Middle    |    | 1  |    |
