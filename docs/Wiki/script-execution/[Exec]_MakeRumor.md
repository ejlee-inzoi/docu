---
slug: "/Wiki/script-execution/Exec_MakeRumor"
---

# [Exec]_MakeRumor

Overview
==

* Issues a rumor and grants it to the specified target (`BaseObject`).  
* The rumor is also registered with the Rumor Manager.  
* The rumor is **not** registered to `Self` when used in a script.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The target object that receives the rumor |
| Command | MakeRumor |
| S1 | Rumor ID (from Rumor.json) |
| S2 | - |
| F1 | - |
| F2 | - |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Generate a new rumor | Self | MakeRumor | RumorTest |  |  |  | 1.0 |
