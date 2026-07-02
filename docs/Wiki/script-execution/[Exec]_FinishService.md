---
slug: "/Wiki/script-execution/Exec_FinishService"
---

# [Exec]_FinishService

Overview
==

* If the BaseObject belongs to a job group that provides services, this command ends the service they are currently performing.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object (Joy) to execute the command on |
| Command | FinishService |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| End the service currently being performed by Self | Self | FinishService |  |  |  |  |  |
| End the service currently being performed by Target | Target | FinishService |  |  |  |  |  |
