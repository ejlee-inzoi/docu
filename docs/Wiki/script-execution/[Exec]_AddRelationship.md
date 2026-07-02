---
slug: "/Wiki/script-execution/Exec_AddRelationship"
---

# [Exec]_AddRelationship

Overview
==

* Increases the value of a specified Relationship Stat.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command (not used) |
| Command | AddRelationship |
| S1 | Relationship Stat ID (from RelationshipStat.json) |
| S2 | Whether to ignore relationship focus (True / (False or blank)) |
| F1 | Amount to increase the relationship stat by |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Increase the friendship stat between myself and the target by 10 | Self | AddRelationship | friendship |  | 10 |  |  |
