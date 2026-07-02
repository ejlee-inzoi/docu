---
slug: "/Wiki/script-condition/Cond_IsWeekday"
---

# [Cond]_IsWeekday

Overview
==

* Condition command that checks whether the current in-game day is a **weekday** (Monday to Friday).
* If `CompareType` is `None`, it is treated as `Equal`.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | IsWeekday                                |
| CompareType | Comparison type (Equal / NotEqual / None) |

Examples
========

| Example Description                     | BaseObject | Command    | CompareType   | S1 | S2 | F1 | F2 |
|-----------------------------------------|------------|------------|----------------|----|----|----|----|
| If today is a weekday                   | Self       | IsWeekday  | Equal / None   |    |    |    |    |
| If today is NOT a weekday               | Self       | IsWeekday  | NotEqual       |    |    |    |    |
