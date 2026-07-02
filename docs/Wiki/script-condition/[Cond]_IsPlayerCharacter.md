---
slug: "/Wiki/script-condition/Cond_IsPlayerCharacter"
---

# [Cond]_IsPlayerCharacter

Overview
==

* Checks whether the `BaseObject` is the character currently being directly controlled by the player.

Parameter
=========

| Params      | Description                                |
|-------------|--------------------------------------------|
| BaseObject  | The object to check the condition for       |
| Command     | IsPlayerCharacter                          |
| CompareType | Comparison type (Equal / NotEqual only)     |

Examples
========

| Example Description                                | BaseObject | Command            | CompareType | S1 | S2 | F1 | F2 |
|----------------------------------------------------|------------|---------------------|-------------|----|----|----|----|
| If I am the currently controlled player character  | Self       | IsPlayerCharacter   | Equal       |    |    |    |    |
| If I am not the currently controlled character (i.e., an NPC) | Self       | IsPlayerCharacter   | NotEqual    |    |    |    |    |
