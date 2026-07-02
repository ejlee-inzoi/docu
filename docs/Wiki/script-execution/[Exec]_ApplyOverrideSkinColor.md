---
slug: "/Wiki/script-execution/Exec_ApplyOverrideSkinColor"
---

# [Exec]_ApplyOverrideSkinColor

Overview
==

* Applies an override skin color to the specified object.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | ApplyOverrideSkinColor |
| S1 | AppearanceSkinColorId (from AppearanceSkinColor.json). Use `None` to remove the applied skin color. |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Apply zombie skin color | Self | ApplyOverrideSkinColor | ZombieSkinColor |  |  |  |  |
| Remove applied skin color | Self | ApplyOverrideSkinColor | None |  |  |  |  |
