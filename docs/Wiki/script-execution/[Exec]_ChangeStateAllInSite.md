---
slug: "/Wiki/script-execution/Exec_ChangeStateAllInSite"
---

# [Exec]_ChangeStateAllInSite

Overview
==

* Changes the state of **all GameObjects** located within the same Site as the character executing the command.

Details
==

| Parameter | Description |
| --- | --- |
| Command | ChangeStateAllInSite |
| S1 | State Group ID (from StateVariation.json) |
| S2 | State name within the group to apply |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Change the "Fire" state group to "Fire" for all GameObjects in the Site |  | ChangeStateAllInSite | Fire | Fire |  |  |  |
| Change the "Fire" state group to "None" for all GameObjects in the Site |  | ChangeStateAllInSite | Fire | None |  |  |  |
