---
slug: "/Wiki/script-execution/Exec_ChangeInteractionPickedActor"
---

# [Exec]_ChangeInteractionPickedActor

Overview
==

* A script that allows changing the `PickedActor` of a currently running InteractionBag (sequencer).  
* **Warning: Using this script may cause subsequent interactions to behave differently than originally intended.**

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object whose currently active InteractionBag's PickedActor will be changed (Self or Target) |
| Command | ChangeInteractionPickedActor |
| S1 | The new PickedActor type (Self or Target) |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Change the PickedActor of Self’s current InteractionBag to Self | Self | ChangeInteractionPickedActor | Self |  |  |  |  |
| Change the PickedActor of Self’s current InteractionBag to Target | Self | ChangeInteractionPickedActor | Target |  |  |  |  |
| Change the PickedActor of Target’s current InteractionBag to Self | Target | ChangeInteractionPickedActor | Self |  |  |  |  |
| Change the PickedActor of Target’s current InteractionBag to Target | Target | ChangeInteractionPickedActor | Target |  |  |  |  |
