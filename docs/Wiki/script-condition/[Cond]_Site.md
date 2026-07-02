---
slug: "/Wiki/script-condition/Cond_Site"
---

# [Cond]_Site

Overview
==

* A condition command that checks the Site ID where the avatar is currently located.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | The object to check the condition against |
| Command | Site |
| CompareType | Comparison operator type |
| S1 | Site ID to compare * If set to None, checks that the Site ID does not exist |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| If my location is within Site01 | Self | Site | Equal | Site01 |  |  |  |
| If my location is outside Site01 | Self | Site | NotEqual | Site01 |  |  |  |
| If my location is within Site02 | Self | Site | Equal | Site02 |  |  |  |
| If my location is within any Site | Self | Site | Equal |  |  |  |  |
| If the target's location is within Site01 | Target | Site | Equal | Site01 |  |  |  |
