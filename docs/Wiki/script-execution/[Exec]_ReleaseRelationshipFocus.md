---
slug: "/Wiki/script-execution/Exec_ReleaseRelationshipFocus"
---

# [Exec]_ReleaseRelationshipFocus

Overview
==

* Script to release relationship focus for successful focus selection.  
* For failed selections, simply reduce the relevant stat — no separate script exists.

Details
==

| Parameter   | Description                                                  |
|-------------|--------------------------------------------------------------|
| BaseObject  | Object to execute the command                                |
| Command     | ReleaseRelationshipFocus                                     |
| S1          | Stat name to release focus from (from RelationshipStat.json) |
| F1          | Amount to increase or decrease the relationship score by     |

Examples
==

| Example                                                        | BaseObject | Command                 | S1         | S2 | F1 | F2 | Prob |
|----------------------------------------------------------------|------------|-------------------------|------------|----|----|----|------|
| Release friendship focus and grant 10 friendship points        | Self       | ReleaseRelationshipFocus | friendship |    | 10 |    |      |
| Release romance focus and grant 10 romance points              | Self       | ReleaseRelationshipFocus | romance    |    | 10 |    |      |
