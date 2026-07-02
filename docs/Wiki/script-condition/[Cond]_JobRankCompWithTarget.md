---
slug: "/Wiki/script-condition/Cond_JobRankCompWithTarget"
---

# [Cond]_JobRankCompWithTarget

Overview
==

* Compares the **job rank** of `Self` and `Target`.

Parameter
=========

| Params      | Description                                  |
|-------------|----------------------------------------------|
| BaseObject  | Not used                                     |
| Command     | JobRankCompWithTarget                        |
| CompareType | Comparison type                              |

Examples
========

| Example Description                                     | BaseObject | Command               | CompareType     | S1 | S2 | F1 | F2 | Prob |
|---------------------------------------------------------|------------|------------------------|------------------|----|----|----|----|-------|
| If my job rank is equal to the target's                |            | JobRankCompWithTarget  | Equal            |    |    |    |    |       |
| If my job rank is different from the target's          |            | JobRankCompWithTarget  | NotEqual         |    |    |    |    |       |
| If my job rank is higher than the target's             |            | JobRankCompWithTarget  | Greater           |    |    |    |    |       |
| If my job rank is equal to or higher than the target's |            | JobRankCompWithTarget  | GreaterOrEqual   |    |    |    |    |       |
| If my job rank is lower than the target's              |            | JobRankCompWithTarget  | Less             |    |    |    |    |       |
| If my job rank is lower than or equal to the target's  |            | JobRankCompWithTarget  | LessOrEqual      |    |    |    |    |       |
