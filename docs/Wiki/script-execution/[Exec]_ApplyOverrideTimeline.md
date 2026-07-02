---
slug: "/Wiki/script-execution/Exec_ApplyOverrideTimeline"
---

# [Exec]_ApplyOverrideTimeline

Overview
==

* A script that applies an override schedule (timeline) to the target.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | ApplyOverrideTimeline |
| S1 | ID from the Timeline\_*.json table |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Apply the "skip school" override schedule | Self | ApplyOverrideTimeline | Event_Relationship_AbsentSchool_0900_1800 |  |  |  |  |
