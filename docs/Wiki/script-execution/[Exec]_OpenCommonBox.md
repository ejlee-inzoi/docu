---
slug: "/Wiki/script-execution/Exec_OpenCommonBox"
---

# [Exec]_OpenCommonBox

Overview
==

* A script that deletes the target box and transfers its contents directly into the inventory.  
  + `Self` = The Joy who opens the box and receives the contents into their inventory  
  + `Target` = The object box  
* **Note:** `BaseObject` must always be set to `Self`.

Details
==

| Parameter | Description |
| --- | --- |
| Command | OpenCommonBox |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Open the box | Self | OpenCommonBox |  |  |  |  |  |
