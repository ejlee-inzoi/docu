---
slug: "/Wiki/script-execution/Exec_SpawnGameObject"
---

# [Exec]_SpawnGameObject

Overview
==

* Spawns a placeable GameObject in the site.

Details
==

| Parameter   | Description                                                             |
|-------------|-------------------------------------------------------------------------|
| BaseObject  | Object to execute the command                                           |
| Command     | SpawnGameObject                                                         |
| S1          | GameObjectId — ID of the object to spawn                                |
| S2          | StateGroupId,StateId — State info to apply upon spawn (e.g., Broken,Broken) |
| F2          | Spawn range (in meters); spawn fails if placement within range is impossible |

Examples
==

| Example                                                       | BaseObject | Command          | S1              | S2             | F1 | F2   |
|---------------------------------------------------------------|------------|------------------|------------------|----------------|----|------|
| Spawn broken KitchenRange01 within 1000m of self              | Self       | SpawnGameObject  | KitchenRange01   | Broken,Broken  |    | 1000 |
| Instantly spawn KitchenRange01 within 100m of self            | Self       | SpawnGameObject  | KitchenRange01   |                | 0  | 100  |
