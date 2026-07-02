---
slug: "/Wiki/script-execution/Exec_PutDownSlotObject"
---

# [Exec]_PutDownSlotObject

Overview
==

* Function to place a GameObject held in hand into a specific slot of the target without despawning it.

Details
==

| Parameter  | Description                                           |
|------------|-------------------------------------------------------|
| BaseObject | Object to execute the command                        |
| Command    | PutDownSlotObject                                     |
| S1         | Defines which hand to pick up from * RightHand/LeftHand |
| S2         | Slot ID to place the held object into                |

Examples
==

| Example                                                                     | BaseObject | Command          | S1        | S2           | F1 | F2 | Prob |
|-----------------------------------------------------------------------------|------------|------------------|-----------|--------------|----|----|------|
| Place the GameObject in hand into the CookingSlot (S2) of the target (microwave) | Target     | PutDownSlotObject | RightHand | CookingSlot  |    |    |      |
