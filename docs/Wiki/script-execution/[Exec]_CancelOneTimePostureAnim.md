---
slug: "/Wiki/script-execution/Exec_CancelOneTimePostureAnim"
---

# [Exec]_CancelOneTimePostureAnim

Overview
==

* Cancels a specific one-time PostureAnim setting for the target object.

Details
==

| **Parameter** | **Description** |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | CancelOneTimePostureAnim |
| S1 | PostureAnim ID to cancel |

Example
==

| **Example** | **BaseObject** | **Command** | **S1** | **S2** | **F1** | **F2** | **Prob** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cancel the Getup_BeanBag_Eureka PostureAnim on myself | Self | CancelOneTimePostureAnim | Getup_BeanBag_Eureka |  |  |  | 1.0 |
| Cancel the End_Sleep_Falling PostureAnim on the target | Target | CancelOneTimePostureAnim | End_Sleep_Falling |  |  |  | 1.0 |
