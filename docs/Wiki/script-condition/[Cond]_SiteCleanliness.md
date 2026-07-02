---
slug: "/Wiki/script-condition/Cond_SiteCleanliness"
---

# [Cond]_SiteCleanliness

Overview
==

* Checks the cleanliness level of the lot where the character is currently located.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | The object to check the condition against |
| Command | SiteCleanliness |
| CompareType | Comparison operator type |
| F1 | Cleanliness value of the lot (0~2) |
|  |  |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| If the cleanliness level of the current lot is greater than 1 | Self | SiteCleanliness | Greater |  |  | 1 |  |
| If the cleanliness level of the current lot is greater than 0.5 | Self | SiteCleanliness | Greater |  |  | 0.5 |  |
| If the cleanliness level of the current lot is 0 | Self | SiteCleanliness | Equal |  |  | 0 |  |
