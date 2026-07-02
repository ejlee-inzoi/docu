---
slug: "/Wiki/script-condition/Cond_SkillUp"
---

# [Cond]_SkillUp

Overview
==

* A condition command that checks whether the level of a specific skill has increased **in the current tick (frame)**.
* Can be meaningfully used in traits (e.g., TriggeredBuff).

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | The object to check the condition against |
| Command | SkillUp |
| CompareType | Equal, NotEqual |
| S1 | Skill ID of the target to check for level-up (from Skill.json) |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Did my Charisma skill level up **in the current frame**? | Self | SkillUp | Equal | Charisma |  |  |  |
| Did my Charisma skill **not** level up in the current frame? | Self | SkillUp | NotEqual | Charisma |  |  |  |
