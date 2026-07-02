---
slug: "/Wiki/script-condition/Cond_IsGhostCharacter"
---

# [Cond]_IsGhostCharacter

Overview
==

* Condition command that checks whether the target entity is a ghost.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | IsGhostCharacter                         |
| CompareType | Type of comparison                       |

Examples
========

| Example Description                  | BaseObject | Command           | CompareType | S1 | S2 | F1 | F2 |
|--------------------------------------|------------|--------------------|-------------|----|----|----|----|
| If I am a ghost                      | Self       | IsGhostCharacter   | Equal       |    |    |    |    |
| If I am not a ghost                  | Self       | IsGhostCharacter   | NotEqual    |    |    |    |    |
