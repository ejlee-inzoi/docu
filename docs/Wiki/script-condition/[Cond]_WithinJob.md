---
slug: "/Wiki/script-condition/Cond_WithinJob"
---

# [Cond]_WithinJob

Overview
==

* Checks if the character has joined, left, or been promoted within a job.
* Verifies whether there has been a join, resignation, or promotion record within a specified time frame.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | The object to check the condition against |
| Command | WithinJob |
| CompareType | Comparison operator type |
| S1 | Type to check: Promotion (promotion), JoinJob (joined), LeftJob (resigned) |
| F1 | Time range to check, in seconds |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Was promoted within 1 day | Self | WithinJob | Equal | Promotion |  | 86400 |  |
| Joined a job within 1 day | Self | WithinJob | Equal | JoinJob |  | 86400 |  |
| Left a job within 1 day | Self | WithinJob | Equal | LeftJob |  | 86400 |  |
