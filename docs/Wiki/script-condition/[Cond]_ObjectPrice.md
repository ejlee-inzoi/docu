---
slug: "/Wiki/script-condition/Cond_ObjectPrice"
---

# [Cond]_ObjectPrice

Overview
==

* Checks whether the **price of the object** matches a specified condition.

Parameter
=========

| Params      | Description                                 |
|-------------|---------------------------------------------|
| BaseObject  | The object to evaluate                      |
| Command     | ObjectPrice                                 |
| CompareType | Comparison type (e.g., Equal, Greater, Less)|
| F1          | Price value to compare                      |

Examples
========

| Example Description                       | BaseObject | Command      | CompareType | S1 | S2 | F1  | F2 | Prob |
|-------------------------------------------|------------|---------------|-------------|----|----|-----|-----|-------|
| Is the object's price greater than 10?    | Target     | ObjectPrice   | Greater     |    |    | 10  |     |       |
| Is the object's price less than 100?      | Target     | ObjectPrice   | Less        |    |    | 100 |     |       |
