---
slug: "/Wiki/script-condition/Cond_IsWeekend"
---

# [Cond]_IsWeekend

Overview
==

* Condition command to determine whether the current in-game day is a **weekend** (typically Saturday or Sunday).
* If `CompareType` is set to `None`, it behaves the same as `Equal`.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | IsWeekend                                |
| CompareType | Comparison type (Equal / NotEqual / None) |

Examples
========

| Example Description                       | BaseObject | Command   | CompareType   | S1 | S2 | F1 | F2 |
|-------------------------------------------|------------|-----------|----------------|----|----|----|----|
| If today is a weekend                     | Self       | IsWeekend | Equal / None   |    |    |    |    |
| If today is NOT a weekend                 | Self       | IsWeekend | NotEqual       |    |    |    |    |
