---
slug: "/Wiki/script-execution/Exec_SetGhostInteractionAvailability"
---

# [Exec]_SetGhostInteractionAvailability

Overview
==

* Changes the state to allow or disallow interaction with ghost Joy characters.

Details
==

| Parameter   | Description                                                       |
|-------------|-------------------------------------------------------------------|
| BaseObject  | Object to execute the command                                     |
| Command     | SetGhostInteractionAvailability                                   |
| F1          | 0 = Disable interaction, any other value = Enable interaction     |

Examples
==

| Example                                         | BaseObject | Command                         | S1 | S2 | F1 | F2 | Prob |
|-------------------------------------------------|------------|----------------------------------|----|----|----|----|------|
| Enable ghost interaction for self               | Self       | SetGhostInteractionAvailability |    |    | 1  |    |      |
| Disable ghost interaction for target            | Target     | SetGhostInteractionAvailability |    |    | 0  |    |      |
