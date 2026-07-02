---
slug: "/Wiki/script-condition/Cond_GrowthStep"
---

# [Cond]_GrowthStep

Overview
==

* Condition used to compare the age group (growth step) of the target.

Parameters
==========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | Object to check the condition on         |
| Command     | GrowthStep                               |
| CompareType | Type of comparison                       |
| S1          | GrowthStep to compare against (see list below) |

GrowthStep Values for S1
=========================

| Id        | DisplayTextId (Translation) |
|-----------|------------------------------|
| Infant    | 신생아 (Infant)              |
| Toddler   | 유아 (Toddler)               |
| Child     | 어린이 (Child)               |
| LowTeen   | 사춘기 (LowTeen)             |
| HighTeen  | 청소년 (HighTeen)            |
| Youth     | 청년 (Youth)                 |
| Adult     | 중년 (Adult)                 |
| Old       | 장년 (Old)                   |
| Elderly   | 노인 (Elderly)               |

Examples
========

| Example                                                                 | BaseObject | Command     | CompareType     | S1        | S2 | F1 | F2 |
|-------------------------------------------------------------------------|------------|-------------|------------------|-----------|----|----|----|
| If my age is exactly Infant                                             | Self       | GrowthStep  | Equal            | Infant    |    |    |    |
| If my age is Child or younger (Infant, Toddler, Child)                 | Self       | GrowthStep  | LessOrEqual      | Child     |    |    |    |
| If my age is greater than Adult (Old or Elderly)                        | Self       | GrowthStep  | Greater          | Adult     |    |    |    |
| If the target's age is not HighTeen                                     | Target     | GrowthStep  | NotEqual         | HighTeen  |    |    |    |
| If the target's age is HighTeen or older                                | Target     | GrowthStep  | GreaterOrEqual   | HighTeen  |    |    |    |
