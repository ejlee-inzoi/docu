---
slug: "/Wiki/script-execution/Exec_RumorTransfer"
---

# [Exec]_RumorTransfer

Overview
==

* Transfers a held rumor to another character.  
  + TransferRate in DA_Rumor is ignored during this operation.  
  + The rumor from the base character is given to the target.

Details
==

| Parameter   | Description                   |
|-------------|-------------------------------|
| BaseObject  | Object to execute the command |
| Command     | RumorTransfer                 |
| S1          | Rumor ID (from Rumor.json)    |
| S2          | -                             |
| F1          | -                             |
| F2          | -                             |

Examples
==

| Example                         | BaseObject | Command       | S1         | S2 | F1 | F2 | Prob |
|---------------------------------|------------|----------------|------------|----|----|----|------|
| Transfer a rumor to the target | Self       | RumorTransfer  | RumorTest  |    |    |    | 1.0  |
