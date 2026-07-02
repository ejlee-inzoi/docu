---
slug: "/Wiki/script-execution/Exec_SellGrabObject"
---

# [Exec]_SellGrabObject

Overview
==

* Sells the object currently held in hand.  
* Intended to be triggered via AnimNotify → RunScript during animation.

Details
==

| Parameter   | Description                   |
|-------------|-------------------------------|
| BaseObject  | Object to execute the command |
| Command     | SellGrabObject                |

Examples
==

| Example                     | BaseObject | Command         | S1 | S2 | F1 | F2 | Prob |
|-----------------------------|------------|------------------|----|----|----|----|------|
| Sell the item in hand       | Self       | SellGrabObject   |    |    |    |    |      |

SellGrabObject
==============

Detaches the object from the hand of the cooperating character, destroys the object, and grants money equal to the object's value.

**Must be called during a cooperative interaction**, where:

- A cooperative action is in progress  
- The giver has a sellable item in hand

Only under these conditions will the script function correctly.
