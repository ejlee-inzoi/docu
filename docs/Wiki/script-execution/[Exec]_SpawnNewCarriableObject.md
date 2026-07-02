---
slug: "/Wiki/script-execution/Exec_SpawnNewCarriableObject"
---

# [Exec]_SpawnNewCarriableObject

Overview
==

* Spawns a carriable GameObject and attaches it to a specific hand of the character, simulating a pickup action.

Details
==

| Parameter   | Description                                                |
|-------------|------------------------------------------------------------|
| BaseObject  | Object to execute the command                              |
| Command     | SpawnNewCarriableObject                                    |
| S1          | ID of the carriable GameObject to spawn                    |
| S2          | Hand to attach the object to (RightHand / LeftHand)       |

Note
====

Currently, `S2` is not functionally used — dual-hand interaction is planned.

Examples
==

| Example                                 | BaseObject | Command                | S1   | S2        | F1 | F2 | Prob |
|-----------------------------------------|------------|-------------------------|------|-----------|----|----|------|
| Spawn a Book in my right hand           | Self       | SpawnNewCarriableObject | Book | RightHand |    |    |      |
