---
slug: "/Wiki/script-execution/Exec_PutDownInventoryObject"
---

# [Exec]_PutDownInventoryObject

Overview
==

* Function to place a selected GameObject from the personal bag into a specific slot of the target  
  + The target must be found via AutoFind  
  + If no target is found, the object is placed on the ground  
* Must be used with an Action Command of the same name for effect!

Details
==

| Parameter   | Description                     |
|-------------|---------------------------------|
| BaseObject  | Ignored (always treated as Self) |
| Command     | PutDownInventoryObject          |

Examples
==

| Example                                                      | BaseObject | Command              | S1 | S2 | F1 | F2 | Prob |
|--------------------------------------------------------------|------------|----------------------|----|----|----|----|------|
| Place selected GameObject from bag into a specific slot of target | Self       | PutDownInventoryObject |    |    |    |    |      |
