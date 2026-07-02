---
slug: "/Wiki/script-execution/Exec_PickUpSlotObject"
---

# [Exec]_PickUpSlotObject

Overview
==

* Attaches a CarriableObject from a specified slot (S2) of the Target object to the right hand of the Self character.  
* If the Target does not have a slot named `S2`, or the slot exists but is empty, the command will fail.

Details
==

| Parameter | Description |
| --- | --- |
| Command | PickUpSlotObject |
| S2 | Slot ID on the Target where the CarriableObject is placed |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Attach the object in the Target (microwave)’s “CookingSlot” to my right hand | Self | PickUpSlotObject |  | CookingSlot |  |  |  |
