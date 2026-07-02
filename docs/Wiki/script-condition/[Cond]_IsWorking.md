---
slug: "/Wiki/script-condition/Cond_IsWorking"
---

# [Cond]_IsWorking

Overview
==

* Checks whether the current Joy character is **working**.
* Determined based on whether a mission ID is currently assigned.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | IsWorking                                |
| CompareType | Comparison type (Equal / NotEqual / None) |

Examples
========

| Example Description                         | BaseObject | **Command** | CompareType | S1 | S2 | F1 | F2 | Prob |
|---------------------------------------------|------------|-------------|-------------|----|----|----|----|-------|
| Is the BaseObject currently working?        | Self       | IsWorking   | None        |    |    |    |    |       |
| Is the BaseObject currently working?        | Self       | IsWorking   | Equal       |    |    |    |    |       |
| Is the BaseObject NOT currently working?    | Self       | IsWorking   | NotEqual    |    |    |    |    |       |
