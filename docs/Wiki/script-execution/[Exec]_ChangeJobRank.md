---
slug: "/Wiki/script-execution/Exec_ChangeJobRank"
---

# [Exec]_ChangeJobRank

Overview
==

* A script that forcibly changes a character's job rank.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | ChangeJobRank |
| S1 | Job ID to change to (optional)  
  * If specified, the character will be transferred to the corresponding department within the company. |
| F1 | New Rank (This is the target rank, **not a diff!**)  
  * The rank is changed directly, regardless of RankConditions or Job Level.  
  * Note: Changes such as position reassignment and salary recalculation will take effect from the next workday. |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Change my current job rank to 5 | Self | ChangeJobRank |  |  | 5 |  |  |
| Transfer to the "DebutPrepare" department and set rank to 1 | Self | ChangeJobRank | DebutPrepare |  | 1 |  |  |
