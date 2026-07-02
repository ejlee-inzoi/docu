---
slug: "/Wiki/script-condition/Cond_HasSkinColor"
---

# [Cond]_HasSkinColor

Overview
==

* Condition to check whether an `OverrideSkin` is currently applied to the character.

Parameter
=========

| Params      | Description                                                  |
|-------------|--------------------------------------------------------------|
| BaseObject  | The object to check the condition for                        |
| Command     | HasOverrideSkin                                              |
| CompareType | Comparison type (Equal / NotEqual only)                      |
| S1          | AppearanceSkinId (from AppearanceSkinType.json)             |

Examples
========

| Example Description                                      | BaseObject | Command        | CompareType | S1         | S2 | F1 | F2 | Prob |
|----------------------------------------------------------|------------|----------------|-------------|------------|----|----|----|-------|
| If the character has the OverrideSkin "ZombieSkin"       | Self       | HasOverrideSkin | Equal      | ZombieSkin |    |    |    |       |
