---
slug: "/Wiki/script-condition/Cond_IsNpcCharacter"
---

# [Cond]_IsNpcCharacter

Overview
==

* Checks whether the `BaseObject` is an NPC character, such as one belonging to a Company, SiteRole, or Crowd.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | IsNpcCharacter                           |
| CompareType | Comparison type (Equal / NotEqual)       |

Examples
========

| Example Description           | BaseObject | **Command**       | CompareType | S1 | S2 | F1 | F2 | Prob |
|-------------------------------|------------|--------------------|-------------|----|----|----|----|-------|
| If BaseObject is an NPC       | Self       | IsNpcCharacter     | Equal       |    |    |    |    |       |
