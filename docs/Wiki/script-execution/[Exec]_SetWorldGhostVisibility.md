---
slug: "/Wiki/script-execution/Exec_SetWorldGhostVisibility"
---

# [Exec]_SetWorldGhostVisibility

Overview
==

* Makes all ghost Joys in the map visible and allows living Joys to interact with them.

Details
==

| Parameter   | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | - (Not used; typically set as Self)                                         |
| Command     | SetWorldGhostVisibility                                                     |
| S1          | Reason string for making ghosts visible/invisible (e.g., "Ghost")           |
| S2          | Reason string for toggling ghost interaction availability (e.g., "WorldTrigger") |
| F1          | 1 = Show all ghosts & allow interaction, 0 = Hide all ghosts & block interaction |

Examples
==

| Example                                                                 | BaseObject | Command                | S1     | S2            | F1 | F2 | Prob |
|-------------------------------------------------------------------------|------------|-------------------------|--------|---------------|----|----|------|
| Show all ghosts and allow interaction with living Joys                 | Self       | SetWorldGhostVisibility | Ghost  | WorldTrigger  | 1  |    |      |
| Hide all ghosts and prevent interaction with living Joys              | Self       | SetWorldGhostVisibility | Ghost  | WorldTrigger  | 0  |    |      |
