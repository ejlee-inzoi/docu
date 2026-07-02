---
slug: "/Wiki/script-condition/Cond_SiteByImpactPoint"
---

# [Cond]_SiteByImpactPoint

Overview
==

* A condition command that checks the Site ID of the point clicked by the mouse.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | Not used |
| Command | SiteByImpactPoint |
| CompareType | Comparison operator type |
| S1 | Site ID to compare * If set to None, checks that the Site ID does not exist |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| If the point clicked by the mouse is within Site01 | Self | Site | Equal | Site01 |  |  |  |
| If the point clicked by the mouse is outside Site01 | Self | Site | NotEqual | Site01 |  |  |  |
| If the point clicked by the mouse is within Site02 | Self | Site | Equal | Site02 |  |  |  |
| If the point clicked by the mouse is within any Site | Self | Site | Equal |  |  |  |  |
