---
slug: "/Wiki/script-condition/Cond_RelationshipStatRange"
---

# [Cond]_RelationshipStatRange

Overview
==

* A condition command that compares the range of relationship stats with a character.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | Currently unused |
| Command | RelationshipStatRange |
| CompareType | Comparison operator type (Equal/NotEqual) |
| S1 | * Relationship stat ID to compare (from RelationshipStat.json) * {HighestAbsRelationship}: The stat with the highest absolute value regardless of type |
| F1 | Minimum value of the relationship stat |
| F2 | Maximum value of the relationship stat |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| If the friendship stat with the avatar is between 40 and 70 (inclusive) | Target | RelationshipStatRange | Equal | friendship |  | 40 | 70 |
| If the friendship stat with the avatar is not between 0 and 100 (inclusive) | Target | RelationshipStatRange | NotEqual | friendship |  | 0 | 100 |
| If the romance stat with the avatar is between -100 and -70 (inclusive) | Target | RelationshipStatRange | Equal | romance |  | -100 | -70 |
| If the stat with the highest absolute relationship value is between -100 and -60 (inclusive) | Target | RelationshipStatRange | Equal | {HighestAbsRelationship} |  | -100 | -60 |
