---
slug: "/Wiki/script-execution/Exec_SpawnNewBookObject"
---

# [Exec]_SpawnNewBookObject

Overview
==

* Spawns a book and attaches it to a specific hand of the character, as if picked up.  
  If `S1` is empty, a random book will be selected from the book table.

Details
==

| Parameter   | Description                                                    |
|-------------|----------------------------------------------------------------|
| BaseObject  | Object to execute the command                                  |
| Command     | SpawnNewBookObject                                             |
| S1          | Book ID (leave blank to select randomly from book table)       |
| S2          | Hand to attach the book to (RightHand / LeftHand)             |

Note
====

Currently, `S2` is not functionally used — support for dual-hand interaction is planned.

Examples
==

| Example                                             | BaseObject | Command            | S1            | S2        | F1 | F2 | Prob |
|-----------------------------------------------------|------------|---------------------|---------------|-----------|----|----|------|
| Spawn a random book in my right hand               | Self       | SpawnNewBookObject  |               | RightHand |    |    |      |
| Spawn "SpeechBook01" in my right hand              | Self       | SpawnNewBookObject  | SpeechBook01  | RightHand |    |    |      |
