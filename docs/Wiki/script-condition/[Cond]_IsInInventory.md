---
slug: "/Wiki/script-condition/Cond_IsInInventory"
---

# [Cond]_IsInInventory

Overview
==

* Condition command to check whether a `GameObject` is currently stored in an inventory.

Parameter
=========

| Params      | Description                                |
|-------------|--------------------------------------------|
| BaseObject  | The object to check the condition for       |
| Command     | IsInInventory                              |
| CompareType | Type of comparison (Equal / NotEqual)      |
| S1          | -                                          |
| S2          | -                                          |
| F1          | -                                          |
| F2          | -                                          |

Examples
========

| Example Description                                     | BaseObject | Command         | CompareType | S1 | S2 | F1 | F2 |
|---------------------------------------------------------|------------|------------------|-------------|----|----|----|----|
| If the target is currently inside an inventory          | Target     | IsInInventory    | Equal       |    |    |    |    |
| If the target is NOT inside an inventory                | Target     | IsInInventory    | NotEqual    |    |    |    |    |
