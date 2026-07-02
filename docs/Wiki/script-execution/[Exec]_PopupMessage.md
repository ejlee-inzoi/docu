---
slug: "/Wiki/script-execution/Exec_PopupMessage"
---

# [Exec]_PopupMessage

Overview
==

* Displays a popup message.  
* **Note:** The popup will only be shown if the `BaseObject` is the currently controlled player.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | PopupMessage |
| S1 | Popup ID (defined in `Popup.json`) |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Display the `NoticePregnancy` popup after a successful pregnancy | Self | PopupMessage | NoticePregnancy |  |  |  |  |
