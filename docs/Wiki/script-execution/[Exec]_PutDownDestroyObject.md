---
slug: "/Wiki/script-execution/Exec_PutDownDestroyObject"
---

# [Exec]_PutDownDestroyObject

Overview
==

* Puts down and destroys the GameObject currently held in hand.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | PutDownDestroyObject |
| S1 | Specifies which hand’s object to destroy  
  * RightHand / LeftHand |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Despawn the GameObject held in my right hand | Self | PutDownDestroyObject | RightHand |  |  |  |  |
