---
slug: "/Wiki/script-condition/Cond_Stat"
---

# [Cond]_Stat

Overview
==

* A condition command that compares the stat value of an object.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | The object to check the condition against |
| Command | Stat |
| CompareType | Comparison operator type |
| S1 | Stat ID of the target to compare |
| F1 | Absolute value for stat comparison |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| If my Cleanliness stat is less than 40 | Self | Stat | Less | Cleanliness |  | 40 |  |  |
| If my Cleanliness stat is greater than 0 | Self | Stat | Greater | Cleanliness |  | 0 |  |  |
| If my Hunger stat is equal to 0 | Self | Stat | Equal | Hungry |  | 0 |  |  |
| If the target's Hunger stat is greater than or equal to 80 | Target | Stat | GreaterOrEqual | Hungry |  | 80 |  |  |
| If the target's Hunger stat is less than or equal to -10 | Target | Stat | LessOrEqual | Hungry |  | -10 |  |  |
