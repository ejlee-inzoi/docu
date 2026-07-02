---
slug: "/Wiki/script-condition/Cond_IsFamilyHead"
---

# [Cond]_IsFamilyHead

Overview
==

* Checks whether the target is the head of their household.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | IsFamilyHead                             |
| CompareType | Comparison type (Equal / NotEqual)       |

Examples
========

| Example Description                    | BaseObject | Command       | CompareType | S1 | S2 | F1 | F2 | Prob |
|----------------------------------------|------------|----------------|-------------|----|----|----|----|-------|
| Is Self the head of the family?        | Self       | IsFamilyHead   | Equal       |    |    |    |    |       |
| Is Target a non-head family member?    | Target     | IsFamilyHead   | NotEqual    |    |    |    |    |       |
