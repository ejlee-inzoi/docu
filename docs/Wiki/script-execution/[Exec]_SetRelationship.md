---
slug: "/Wiki/script-execution/Exec_SetRelationship"
---

# [Exec]_SetRelationship

Overview
==

* Sets the value of a specified relationship stat.

Details
==

| Parameter   | Description                         |
|-------------|-------------------------------------|
| BaseObject  | Object to execute the command (unused) |
| Command     | SetRelationship                     |
| S1          | Relationship Stat ID                |
| F1          | Value to set the relationship stat to |

Examples
==

| Example                                             | BaseObject | Command         | S1      | S2 | F1  | F2 | Prob |
|-----------------------------------------------------|------------|------------------|---------|----|-----|----|------|
| Set the romance stat between self and target to -60 | Self       | SetRelationship  | romance |    | -60 |    |      |
