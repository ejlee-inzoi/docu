---
slug: "/Wiki/script-execution/Exec_AddModifier"
---

# [Exec]_AddModifier

Overview
==

* Adds a Modifier to the base object (Self or Target), allowing dynamic adjustment of various content elements such as stats, skills, relationships, emotions, etc.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | AddModifier |
| S1 | Modifier Data Table ID  
  * Defines what Modifier to apply and by how much  
  * The corresponding data sheet is named Modifier\_[ContentName].json |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Add Modifier\_Piano\_Play to myself | Self | AddModifier | Modifier\_Piano\_Play |  |  |  |  |
| Add Modifier\_Piano\_Play to the target | Target | AddModifier | Modifier\_Piano\_Play |  |  |  |  |
