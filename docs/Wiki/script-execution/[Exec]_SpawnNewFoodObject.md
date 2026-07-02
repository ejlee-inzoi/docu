---
slug: "/Wiki/script-execution/Exec_SpawnNewFoodObject"
---

# [Exec]_SpawnNewFoodObject

Overview
==

* Spawns a carriable FoodObject and attaches it to a specific hand of the character, simulating a pickup action.

Details
==

| Parameter   | Description                                                |
|-------------|------------------------------------------------------------|
| BaseObject  | Object to execute the command                              |
| Command     | SpawnNewFoodObject                                         |
| S1          | Food ID to spawn                                           |
| S2          | Hand to attach the food to (RightHand / LeftHand)         |

Note
====

Currently, `S2` is not functionally used — dual-hand interaction is planned.

Examples
==

| Example                                      | BaseObject | Command            | S1              | S2        | F1 | F2 | Prob |
|----------------------------------------------|------------|---------------------|------------------|-----------|----|----|------|
| Spawn "PreparedCake01" in my right hand      | Self       | SpawnNewFoodObject  | PreparedCake01   | RightHand |    |    |      |
