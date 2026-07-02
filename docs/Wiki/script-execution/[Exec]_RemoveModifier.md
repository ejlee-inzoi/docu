---
slug: "/Wiki/script-execution/Exec_RemoveModifier"
---

# [Exec]_RemoveModifier

Overview
==

* Removes a previously added Modifier from the base object (Self or Target), which dynamically adjusts various content such as stats, skills, relationships, emotions, etc.

Details
==

| Parameter   | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | Object to execute the command                                               |
| Command     | RemoveModifier                                                              |
| S1          | Modifier Data Table ID  * Specifies the modifier to be removed (e.g., Modifier_[Content].json) * Must already exist on the base object |

Examples
==

| Example                                                        | BaseObject | Command        | S1                     | S2 | F1 | F2 | Prob |
|----------------------------------------------------------------|------------|----------------|------------------------|----|----|----|------|
| Remove existing Modifier_Piano_Play from self                  | Self       | RemoveModifier | Modifier_Piano_Play    |    |    |    |      |
| Remove existing Modifier_Piano_Play from target                | Target     | RemoveModifier | Modifier_Piano_Play    |    |    |    |      |
