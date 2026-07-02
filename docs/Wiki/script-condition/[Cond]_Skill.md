---
slug: "/Wiki/script-condition/Cond_Skill"
---

# [Cond]_Skill

Overview
==

* A condition command that compares the skill level of an object.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | The object to check the condition against |
| Command | Skill |
| CompareType | Comparison operator type |
| S1 | Skill ID of the target to compare (from Skill.json) |
| F1 | Absolute skill level value for comparison |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| If my Charisma skill level is less than 3 | Self | Skill | Less | Charisma |  | 3 |  |
| If my Charisma skill level is greater than 1 | Self | Skill | Greater | Charisma |  | 1 |  |
| If my Music skill level is equal to 1 | Self | Skill | Equal | Music |  | 1 |  |
| If the target's Music skill level is greater than or equal to 3 | Target | Skill | GreaterOrEqual | Music |  | 3 |  |
| If the target's Music skill level is less than or equal to 2 | Target | Skill | LessOrEqual | Music |  | 2 |  |
