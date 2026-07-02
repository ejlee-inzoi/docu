---
slug: "/Wiki/script-condition/Cond_JobRank"
---

# [Cond]_JobRank

Overview
==

* Compares the current **job rank level** of the `BaseObject`.

Parameter
=========

| Params      | Description                          |
|-------------|--------------------------------------|
| BaseObject  | The object to check the condition for |
| Command     | JobRank                              |
| CompareType | Comparison type                      |
| F1          | Job rank level to compare            |

Examples
========

| Example Description                    | BaseObject | Command   | CompareType   | S1 | S2 | F1 | F2 | Prob |
|----------------------------------------|------------|------------|----------------|----|----|----|----|-------|
| If the job rank level is exactly 1     | Self       | JobRank    | Equal          |    |    | 1  |    |       |
| If the job rank level is NOT 1         | Self       | JobRank    | NotEqual       |    |    | 1  |    |       |
| If the job rank level is 1 or higher   | Self       | JobRank    | GreaterEqual   |    |    | 1  |    |       |
