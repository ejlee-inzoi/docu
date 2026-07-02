---
slug: "/Wiki/script-condition/Cond_RomanticOrientation"
---

# [Cond]_RomanticOrientation

Overview
==

* Checks whether both the target and the self have "romantic orientation" set to True.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | The object to check the condition against |
| Command | RomanticOrientation |
| CompareType | Comparison operator type |
| S1 | True / False |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| If both the target and self have romantic orientation set to True | Target | RomanticOrientation | Equal | True |  |  |  |
| If either the target or self has romantic orientation set to False | Target | RomanticOrientation | Equal | False |  |  |  |
