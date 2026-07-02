---
slug: "/Wiki/script-execution/Exec_ApplyOverrideSkin"
---

# [Exec]_ApplyOverrideSkin

Overview
==

* Applies an override skin to the specified object.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | ApplyOverrideSkin |
| S1 | AppearanceSkinId (from AppearanceSkinType.json). Use `None` to remove the applied skin. |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Apply zombie skin | Self | ApplyOverrideSkin | ZombieSkin |  |  |  |  |
| Remove applied skin | Self | ApplyOverrideSkin | None |  |  |  |  |
