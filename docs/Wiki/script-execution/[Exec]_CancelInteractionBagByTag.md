---
slug: "/Wiki/script-execution/Exec_CancelInteractionBagByTag"
---

# [Exec]_CancelInteractionBagByTag

Overview
==

* Cancels an ongoing interaction if it is associated with a specified InteractionBagTag.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | CancelInteractionBagByTag |
| S1 | Interaction Bag Tag |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cancel the interaction if one with the "Idle" tag is currently running | Self | CancelInteractionBagByTag | Idle |  |  |  |  |
