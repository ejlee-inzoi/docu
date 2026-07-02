---
slug: "/Wiki/script-execution/Exec_AddStat"
---

# [Exec]_AddStat

Overview
==

* A script that increases the value of a specified stat.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | AddStat |
| S1 | Type of stat to increase |
| S2 | Not used by default. However, if ***{Except}*** is specified, the script will not execute.  
Can also be used to define an int,int value range when using AddStat. |
| F1 | Amount to increase the stat by |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Increase the Hunger stat for myself | Self | AddStat | Hunger |  | 40 |  |  |
| Increase the Cleanliness stat for myself | Self | AddStat | Cleanliness |  | 40 |  |  |
| Increase Hunger stat for myself only if current value is between 20 and 60  
* If Self's current stat is within 20–60, it increases by F1.  
* The resulting value cannot exceed the stat’s MAX. | Self | AddStat | Hunger | 20,60 | 40 |  |  |
