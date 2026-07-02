---
slug: "/Wiki/script-execution/Exec_AddSeizure"
---

# [Exec]_AddSeizure

### Overview

This command adds the specified game object (BaseObject) to the list of "seized items" at the location (Site) where it is currently placed.  
The entity specified as BaseObject must be located in a valid Site. If no Site is found, the command will not execute.

---

### Details

| Parameter | Description |
| --- | --- |
| BaseObject | The game object to be marked as seized. It must be located in a valid Site. |
| Command | AddSeizure |

---

### Example

| **Example** | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mark Self as a seized object | Self | AddSeizure |  |  |  |  |  |
| Mark Target as a seized object | Target | AddSeizure |  |  |  |  |  |
