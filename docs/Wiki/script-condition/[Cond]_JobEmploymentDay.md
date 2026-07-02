---
slug: "/Wiki/script-condition/Cond_JobEmploymentDay"
---

# [Cond]_JobEmploymentDay

Overview
==

* Compares how many days the `BaseObject` has been employed at their current job.  
* Employment days are counted from the date of job acceptance, with the first day being day 1.

Parameter
=========

| Params      | Description                                 |
|-------------|---------------------------------------------|
| BaseObject  | The object to check the condition for        |
| Command     | JobEmploymentDay                            |
| CompareType | Comparison type                             |
| F1          | Number of employment days to compare         |

Examples
========

| Example Description                       | BaseObject | Command           | CompareType  | S1 | S2 | F1 | F2 | Prob |
|-------------------------------------------|------------|--------------------|--------------|----|----|----|----|-------|
| If employment duration is exactly 1 day   | Self       | JobEmploymentDay   | Equal        |    |    | 1  |    |       |
| If employment duration is NOT 1 day       | Self       | JobEmploymentDay   | NotEqual     |    |    | 1  |    |       |
| If employment duration is 1 day or more   | Self       | JobEmploymentDay   | GreaterEqual |    |    | 1  |    |       |
