---
slug: "/Wiki/script-condition/Cond_IsLocatedSameSite"
---

# [Cond]_IsLocatedSameSite

Overview
==

* Checks whether `SelfObject` and `TargetObject` are located on the same site.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | IsLocatedSameSite                        |

Examples
========

| Example Description                              | BaseObject | Command            | CompareType | S1 | S2 | F1 | F2 |
|--------------------------------------------------|------------|---------------------|-------------|----|----|----|----|
| Check if I am on the same site as the target     | Self       | IsLocatedSameSite   |             |    |    |    |    |
| Check if the target is on the same site as me    | Target     | IsLocatedSameSite   |             |    |    |    |    |
