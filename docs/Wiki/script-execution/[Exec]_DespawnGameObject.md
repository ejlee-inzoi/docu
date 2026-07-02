---
slug: "/Wiki/script-execution/Exec_DespawnGameObject"
---

# [Exec]_DespawnGameObject

Overview
==

* Removes (destroys) the specified `BaseObject`.  
* If the object is a `CarriableObject` placed on a site, it also updates the pathfinding data of the site.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object to be removed |
| Command | DespawnGameObject |
| S1 | - |
| S2 | - |
| F1 | - |
| F2 | - |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Remove the target object | Self | DespawnGameObject |  |  |  |  | 1.0 |
