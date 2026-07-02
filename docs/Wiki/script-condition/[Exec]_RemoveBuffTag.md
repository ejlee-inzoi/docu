---
slug: "/Wiki/script-condition/Exec_RemoveBuffTag"
---

# [Exec]_RemoveBuffTag

Overview
==

* Removes all Buffs that have a specific tag.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | RemoveBuffTag |
| S1 | Buff Tag |
| S2 | If "IsCancel" is provided, the Buffs will be canceled instead of removed |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Remove all Buffs with the "Test" tag from myself | Self | RemoveBuffTag | Test |  |  |  |  |
| Cancel all Buffs with the "Test" tag from myself | Self | RemoveBuffTag | Test | IsCancel |  |  |  |
