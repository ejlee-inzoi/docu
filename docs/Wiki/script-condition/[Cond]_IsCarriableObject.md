---
slug: "/Wiki/script-condition/Cond_IsCarriableObject"
---

# [Cond]_IsCarriableObject

Overview
==

* Checks whether the BaseObject is a carriable object.

Parameter
=========

| Params      | Description                                 |
|-------------|---------------------------------------------|
| BaseObject  | The object to check the condition for        |
| Command     | IsCarriableObject                           |
| CompareType | Type of comparison (Only Equal / NotEqual)  |

Examples
========

| Example Description                            | BaseObject | Command            | CompareType | S1 | S2 | F1 | F2 | Prob |
|------------------------------------------------|------------|---------------------|-------------|----|----|----|----|-------|
| If the target is a CarriableObject             | Target     | IsCarriableObject   | Equal       |    |    |    |    |       |
| If the target is NOT a CarriableObject         | Target     | IsCarriableObject   | NotEqual    |    |    |    |    |       |
