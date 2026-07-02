---
slug: "/Wiki/script-execution/Exec_DetachMesh"
---

# [Exec]_DetachMesh

Overview
==

* Detaches a Skeletal Mesh from the character.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object from which to detach the mesh |
| Command | DetachMesh |
| S1 | Mesh ID (from the AttachMesh data table) |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Detach the mesh with ID "SchoolBag" from myself | Self | DetachMesh | SchoolBag |  |  |  |  |
