---
slug: "/Wiki/script-execution/Exec_DestroyCarriableObject"
---

# [Exec]_DestroyCarriableObject

Overview
==

* Removes a Carriable Object currently held in the character’s hand from the world.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | DestroyCarriableObject |
| S1 | Specifies which hand's held object to destroy  
  * RightHand / LeftHand |

Note
====

S2 is currently unused. Support for dual-hand interactions is planned.

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Discard the item held in the right hand into the trash | Self | DestroyCarriableObject | RightHand |  |  |  |  |
