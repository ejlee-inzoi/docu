---
slug: "/Wiki/script-execution/Exec_ApplyOneTimePostureAnim"
---

# [Exec]_ApplyOneTimePostureAnim

Overview
==

* Plays a one-time PostureAnim on the specified target object.

Details
==

| **Parameter** | **Description** |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | ApplyOneTimePostureAnim |
| S1 | PostureAnim ID |

Example
==

| **Example** | **BaseObject** | **Command** | **S1** | **S2** | **F1** | **F2** | **Prob** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Play the Getup_BeanBag_Eureka PostureAnim on myself | Self | ApplyOneTimePostureAnim | Getup_BeanBag_Eureka |  |  |  | 1.0 |
| Play the End_Sleep_Falling PostureAnim on the target | Target | ApplyOneTimePostureAnim | End_Sleep_Falling |  |  |  | 1.0 |
