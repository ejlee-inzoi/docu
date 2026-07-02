---
slug: "/Wiki/script-execution/Exec_RemoveLifeTrigger"
---

# [Exec]_RemoveLifeTrigger

Overview
==

* Script to remove a LifeTrigger.

Details
==

| Parameter   | Description                     |
|-------------|---------------------------------|
| BaseObject  | Object to execute the command   |
| Command     | RemoveLifeTrigger               |
| S1          | LifeTrigger Data Table ID       |

Examples
==

| Example                                           | BaseObject | Command            | S1    | S2 | F1 | F2 | Prob |
|---------------------------------------------------|------------|--------------------|-------|----|----|----|------|
| Remove the natural death trigger from self        | Self       | RemoveLifeTrigger  | Aging |    |    |    |      |
| Remove the fire death trigger from the target     | Target     | RemoveLifeTrigger  | Fire  |    |    |    |      |
