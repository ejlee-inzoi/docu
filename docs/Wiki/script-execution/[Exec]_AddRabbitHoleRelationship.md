---
slug: "/Wiki/script-execution/Exec_AddRabbitHoleRelationship"
---

# [Exec]_AddRabbitHoleRelationship

Overview
==

* Increases or decreases a specific relationship stat with a random set of characters (Joy) who are in the same Rabbit Hole and already have a relationship with the BaseObject.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The central Joy (character) to apply the relationship changes to |
| Command | AddRabbitHoleRelationship |
| S1 | Relationship Stat ID |
| F1 | * Number of characters to apply the effect to (int)  
  + Targets: Characters in the same Rabbit Hole who already have a relationship with the BaseObject  
  + Selection: Randomly chosen from valid targets, up to the number specified  
    - If fewer valid targets exist, apply to as many as possible  
    - If no valid target exists, the command has no effect |
| F2 | Amount to change the relationship stat (float)  
  * +10 = increase by 10  
  * -10 = decrease by 10 |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Increase the Friendship stat by +12.5 for 5 random characters in the same Rabbit Hole | Self | AddRabbitHoleRelationship | Friendship |  | 5 | 12.5 |  |
