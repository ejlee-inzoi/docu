---
slug: "/Wiki/script-execution/Exec_HandOverGrabObject"
---

# [Exec]_HandOverGrabObject

Overview
==

* A script used to hand over an object currently held in the character's hand.  
* This is typically expected to be triggered via `AnimNotify` within an animation using `RunScript`.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | HandOverGrabObject |
| S1 | True / False  
  * If set to `True`, the handed-over object will execute its object script upon being received.  
  * At runtime, the object’s tags will be checked. If any tag matches an ID in `ObjectTagScriptTable`, all `HandOverScript` entries under that row will be executed. |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hand over the object currently held | Self | HandOverGrabObject |  |  |  |  |  |

HandOverGrabObject
==================

Transfers an object from the hand of one character to the hand of another during a cooperative (co-op) interaction.

Conditions:
* The characters are engaged in a cooperative interaction  
* The giver has a hand-held object eligible for handover  
* The receiver's hand is free  

If all conditions are met, the handover will occur.
