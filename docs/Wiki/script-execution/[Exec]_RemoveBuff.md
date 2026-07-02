---
slug: "/Wiki/script-execution/Exec_RemoveBuff"
---

# [Exec]_RemoveBuff

Overview
==

* Script to remove a buff.

Details
==

| Parameter   | Description                            |
|-------------|----------------------------------------|
| BaseObject  | Object to execute the command          |
| Command     | RemoveBuff                             |
| S1          | Buff Data Table ID                     |
| S2          | Use "IsCancel" to process as cancel    |

Examples
==

| Example                              | BaseObject | Command     | S1        | S2       | F1 | F2 | Prob |
|--------------------------------------|------------|-------------|-----------|----------|----|----|------|
| Remove a buff applied to self        | Self       | RemoveBuff  | PianoBuff |          |    |    |      |
| Cancel a buff applied to self        | Self       | RemoveBuff  | PianoBuff | IsCancel |    |    |      |
