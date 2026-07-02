---
slug: "/Wiki/script-condition/Cond_Season"
---

# [Cond]_Season

Overview
==

* Checks the current season status.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | The object to check the condition against |
| Command | Season |
| CompareType | Comparison operator type (Equal, NotEqual) |
| S1 | EB1SeasonType |
| S2 | Not used |
| F1 | Not used |
| F2 | Not used |

S1

* Spring
* Summer
* Fall
* Winter

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| When the season is Spring | Self | Season | Equal | Spring |  |  |  |
| When the season is Summer | Self | Season | Equal | Summer |  |  |  |
| When the season is not Winter | Self | Season | NotEqual | Winter |  |  |  |
