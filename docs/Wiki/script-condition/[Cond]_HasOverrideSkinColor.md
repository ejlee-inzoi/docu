---
slug: "/Wiki/script-condition/Cond_HasOverrideSkinColor"
---

# [Cond]_HasOverrideSkinColor

Overview
==

* Checks whether an `OverrideSkinColor` is currently applied to the character.

Parameter
=========

| Params      | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | The object to check the condition for                                       |
| Command     | HasOverrideSkinColor                                                        |
| CompareType | Type of comparison (Equal / NotEqual only)                                  |
| S1          | AppearanceSkinColorId (defined in AppearanceSkinColor.json)                 |

Examples
========

| Example Description                                         | BaseObject | Command              | CompareType | S1              | S2 | F1 | F2 | Prob |
|-------------------------------------------------------------|------------|-----------------------|-------------|------------------|----|----|----|------|
| If the character has the OverrideSkinColor "ZombieSkinColor" applied | Target     | HasOverrideSkinColor  | Equal       | ZombieSkinColor  |    |    |    |      |
