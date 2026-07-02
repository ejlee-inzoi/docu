---
slug: "/Wiki/script-execution/Exec_RumorTransferByIndex"
---

# [Exec]_RumorTransferByIndex

Overview
==

* Transfers a held rumor to another character using the rumor's index.  
  + DA_Rumor's TransferRate is not applied.  
  + The rumor from Self is given to Target.

Details
==

| Parameter   | Description                     |
|-------------|---------------------------------|
| BaseObject  | Object to execute the command   |
| Command     | RumorTransferByIndex            |
| S1          | -                               |
| S2          | -                               |
| F1          | Rumor Index (0, 1, 2)           |
| F2          | -                               |

Examples
==

| Example                                                              | BaseObject | Command               | S1 | S2 | F1 | F2 | Prob |
|----------------------------------------------------------------------|------------|------------------------|----|----|----|----|------|
| Check if the nth rumor can be transferred, and transfer if possible | Self       | RumorTransferByIndex  |    |    | 0  |    | 1.0  |
