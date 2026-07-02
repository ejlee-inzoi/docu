---
slug: "/Wiki/script-execution/Exec_AttachGrabObject"
---

# [Exec]_AttachGrabObject

Overview
==

* Immediately equips a specific object in the character's hand.  
* This will fail if the character is currently climbing a ladder.  
* If the character is already holding something, the currently held object will be **destroyed** (removed from the world).

Note:  
When attaching a new object, if the character is already holding another object, it will be destroyed.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | AttachGrabObject |
| S1 | ObjectDataTableId of the item to grab |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Grab an umbrella | Self | AttachGrabObject | Umbrella01 |  |  |  |  |
| Grab food (apple) | Self | AttachGrabObject | GrowFood_Apple |  |  |  |  |
