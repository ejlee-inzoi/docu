---
slug: "/Wiki/script-execution/Exec_MakeRabbitHoleRelationship"
---

# [Exec]_MakeRabbitHoleRelationship

Overview
==

* Forms relationships with a specified number of Joys within the same Rabbit Hole who do **not** already have a relationship with the BaseObject  
  (i.e., they are not shown in the relationship UI).

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The main Joy (character) who will form relationships |
| Command | MakeRabbitHoleRelationship |
| S1 | Relationship Stat ID |
| F1 | * Number of characters to form relationships with + Target: Characters in the same Rabbit Hole with no existing relationship + Selection method: Randomly selects up to the specified number from the valid pool  <br> - If fewer characters qualify, form relationships with as many as possible <br> - If none qualify, nothing happens  + **Relationships are formed based on Site + Rabbit Hole ID**  
  + Must be within the same Site <br> - If Site ID is missing, this command cannot be executed |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Randomly form a "Friendship" relationship with 3 Joys in the same Rabbit Hole | Self | MakeRabbitHoleRelationship | Friendship |  | 3 |  |  |
