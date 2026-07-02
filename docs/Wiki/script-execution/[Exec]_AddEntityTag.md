---
slug: "/Wiki/script-execution/Exec_AddEntityTag"
---

# [Exec]_AddEntityTag

Overview
==

* Adds a tag to an entity at runtime.  
* This can only be executed during runtime.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | AddEntityTag |
| S1 | Tag |
| F1 | Lifetime in minutes (maximum: 3 days) |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Add a tag "QWE" to myself (valid for 60 minutes) | Self | AddEntityTag | QWE |  | 60 |  |  |
