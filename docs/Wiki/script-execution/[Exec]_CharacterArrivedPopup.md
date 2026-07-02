---
slug: "/Wiki/script-execution/Exec_CharacterArrivedPopup"
---

# [Exec]_CharacterArrivedPopup

Overview
==

* Displays a `CharacterArrivedPopup` if the `BaseObject` is the currently controlled player character.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | Should be set to Target (the arriving character) |
| Command | CharacterArrivedPopup |
| S1 | Popup ID (from Popup.json) |
| S2 | Interaction Bag ID to trigger |

Example
==

| Example | BaseObject | Command | S1 | S2 |
| --- | --- | --- | --- | --- |
| Show a popup when a friend arrives | Target | CharacterArrivedPopup | FriendArrivedMessage | Co_Greeting_Friend |
