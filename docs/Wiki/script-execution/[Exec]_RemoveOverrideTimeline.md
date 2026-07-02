---
slug: "/Wiki/script-execution/Exec_RemoveOverrideTimeline"
---

# [Exec]_RemoveOverrideTimeline

Overview
==

* Removes the currently applied OverrideTimeline.

Details
==

| Parameter   | Description                                                                     |
|-------------|---------------------------------------------------------------------------------|
| BaseObject  | Character object to execute the command (functions as Self regardless of input) |
| Command     | RemoveOverrideTimeline                                                          |
| S1          | Timeline ID                                                                     |

Examples
==

| Example                                                     | BaseObject | Command               | S1                                      | S2 | F1 | F2 | Prob |
|-------------------------------------------------------------|------------|------------------------|------------------------------------------|----|----|----|------|
| Remove the timeline Event_SpaceTravel_Friday_0900_2300      | Self       | RemoveOverrideTimeline | Event_SpaceTravel_Friday_0900_2300       |    |    |    |      |
