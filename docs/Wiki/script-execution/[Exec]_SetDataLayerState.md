---
slug: "/Wiki/script-execution/Exec_SetDataLayerState"
---

# [Exec]_SetDataLayerState

Overview
==

* Script to change the state of a DataLayer in a World Partition.

Details
==

| Parameter   | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | Not used (fixed as Self)                                                    |
| Command     | SetDataLayerState                                                           |
| S1          | AssetPath of the DataLayer to apply (e.g., /Game/Data/DataLayers/Path/Name) |
| S2          | State to apply: `Activated` (enable), `Loaded` (disable)                    |

Examples
==

| Example                                       | BaseObject | Command           | S1                                                                 | S2        | F1 | F2 | Prob |
|-----------------------------------------------|------------|-------------------|--------------------------------------------------------------------|-----------|----|----|------|
| Activate the ShowMapMode DataLayer            | Self       | SetDataLayerState | /Game/Data/DataLayers/Gangnam_Map/ShowMapMode.ShowMapMode         | Activated |    |    |      |
| Deactivate the HideMapMode DataLayer          | Self       | SetDataLayerState | /Game/Data/DataLayers/Gangnam_Map/HideMapMode.HideMapMode         | Loaded    |    |    |      |
