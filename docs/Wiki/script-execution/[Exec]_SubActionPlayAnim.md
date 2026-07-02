---
slug: "/Wiki/script-execution/Exec_SubActionPlayAnim"
---

# [Exec]_SubActionPlayAnim

Overview
==

* Executes a SubAction animation on the SelfEntity.  
* Note: Always targets the SelfEntity — `BaseObject` is not used.

Details
==

| Parameter | Description                        |
|-----------|------------------------------------|
| Command   | SubActionPlayAnim                  |
| S1        | SubActionAnimDataId to execute     |

Examples
==

| Example                                                        | BaseObject | Command           | S1                                               | S2 | F1 | F2 | Prob |
|----------------------------------------------------------------|------------|--------------------|--------------------------------------------------|----|----|----|------|
| Play "Preference_DisLike_Reaction_Irritated_3" SubAction on self |            | SubActionPlayAnim  | Preference_DisLike_Reaction_Irritated_3         |    |    |    |      |
