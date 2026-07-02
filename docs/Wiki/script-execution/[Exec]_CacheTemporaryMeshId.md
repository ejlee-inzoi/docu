---
slug: "/Wiki/script-execution/Exec_CacheTemporaryMeshId"
---

# [Exec]_CacheTemporaryMeshId

Overview
==

* Caches a Mesh ID that will be temporarily attached to the character.  
  + The cached mesh is later spawned and attached using `AnimNotifyState_AttachTemporaryMesh`.  
* Mesh ID and StaticMesh data are defined in the `DA_TemporaryMesh` asset.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | CacheTemporaryMeshId |
| S1 | Mesh ID to cache for spawning (from DA_TemporaryMesh) |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- |
| Cache the mesh "Soup1Spoon" to attach during soup-eating animation | Self | CacheTemporaryMeshId | Soup1Spoon |  |  |  |
| Cache the mesh "Noodle" to attach to chopsticks during noodle-eating animation | Self | CacheTemporaryMeshId | Noodle |  |  |  |
