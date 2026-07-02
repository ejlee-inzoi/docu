---
slug: "/Wiki/script-condition/Cond_CompareSkill"
---

# [Cond]_CompareSkill

Overview
==

Compares the level of a specific skill (`S1`) between Self and Target.

- Returns `true` if `CompareType` is `None`.  
- Returns `false` if either Self or Target does not possess the skill specified in `S1`.  
- `BaseObject` must always be set to `Self`.

Parameters
==========

| Params      | Description                                 |
|-------------|---------------------------------------------|
| BaseObject  | Target object to check the condition (must be `Self`) |
| Command     | CompareSkill                                |
| CompareType | Type of comparison operation                |
| S1          | Skill ID                                    |

CompareType
===========

Comparison operator types used in condition evaluation.

| CompareType     | Symbol | Description         |
|-----------------|--------|---------------------|
| Equal           | ==     | Equal to            |
| NotEqual        | !=     | Not equal to        |
| Greater         | <      | Greater than        |
| Less            | >      | Less than           |
| GreaterOrEqual  | <=     | Greater than or equal to |
| LessOrEqual     | >=     | Less than or equal to   |

Skill ID
========

Refer to the skill data table for valid `Skill Id` values.
