---
slug: "/Wiki/script-condition/Cond_IsWorkingDayOfWeek"
---

# [Cond]_IsWorkingDayOfWeek

Overview
==

* Checks whether a specific day of the week is a **working day** for the `BaseObject`.

Parameter
=========

| Params         | Description                                         |
|----------------|-----------------------------------------------------|
| BaseObject     | The object to check the condition for               |
| Command        | IsWorkingDayOfWeek                                  |
| CompareType    | Comparison type (Equal / NotEqual)                  |
| PredictedParam | Day of the week (integer from 0 to 6; 0 = Monday)   |

Examples
========

| Example Description                                   | BaseObject | **Command**           | CompareType | S1 | S2 | F1 | F2 |
|-------------------------------------------------------|------------|------------------------|-------------|----|----|----|----|
| Is Monday a working day for BaseObject?               | Self       | IsWorkingDayOfWeek     | Equal       |    |    |    |    |
