---
slug: "/Wiki/script-condition/Cond_DayOfTheWeek"
---

# [Cond]_DayOfTheWeek

Overview
==

- Condition command used to check the current in-game day of the week.  
- If `CompareType` is `None`, it defaults to `Equal`.

Parameters
==========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | Target object to check the condition (not used) |
| Command     | DayOfTheWeek                             |
| CompareType | Type of comparison operation             |
| S1          | Day of the week to compare               |

Examples
========

| Example                                | BaseObject | Command        | CompareType | S1       | S2 | F1 | F2 |
|----------------------------------------|------------|----------------|-------------|----------|----|----|----|
| If today is Sunday                     | Self       | DayOfTheWeek   | Equal       | Sunday   |    |    |    |
| If today is Monday                     | Self       | DayOfTheWeek   | None        | Monday   |    |    |    |
| If today is not Thursday               | Self       | DayOfTheWeek   | NotEqual    | Thursday |    |    |    |

S1
==

| Value     | Description |
|-----------|-------------|
| Sunday    | Sunday      |
| Monday    | Monday      |
| Tuesday   | Tuesday     |
| Wednesday | Wednesday   |
| Thursday  | Thursday    |
| Friday    | Friday      |
| Saturday  | Saturday    |
