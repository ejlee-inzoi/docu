---
slug: "/Wiki/script-condition/Cond_RelationshipStat"
---

# [Cond]_RelationshipStat

Overview
==

* A condition command that compares the relationship stat with a character.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | Currently unused |
| Command | RelationshipStat |
| CompareType | Comparison operator type |
| S1 | Relationship stat ID to compare (from RelationshipStat.json) |
| F1 | Absolute value for relationship stat comparison |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| If the friendship stat with the avatar is less than 40 | Target | RelationshipStat | Less | friendship |  | 40 |  |
| If the friendship stat with the avatar is greater than 0 | Target | RelationshipStat | Greater | friendship |  | 0 |  |
| If the romance stat with the avatar is equal to 0 | Target | RelationshipStat | Equal | romance |  | 0 |  |
| If the business stat with the avatar is greater than or equal to 80 | Target | RelationshipStat | GreaterOrEqual | business |  | 80 |  |
| If the business stat with the avatar is less than or equal to -10 | Target | RelationshipStat | LessOrEqual | business |  | -10 |  |
