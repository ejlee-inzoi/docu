---
slug: "/Wiki/script-execution/Exec_Apply_Cancel_OneTimePostureAnim"
---

# [Exec]_ApplyOneTimePostureAnim / CancelOneTimePostureAnim

Overview
==

* Temporarily overrides the animation used in a posture with a specified animation, applied only once.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | ApplyOneTimePostureAnim / CancelOneTimePostureAnim |
| S1 | OneTimePostureAnim ID |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Change a specific posture animation according to the conditions defined in Sleep_Falling | Self | ApplyOneTimePostureAnim | Sleep_Falling |  |  |  |  |
| Cancel the Sleep_Falling@OneTimePostureAnim that was applied via ApplyOneTimePostureAnim | Self | CancelOneTimePostureAnim | Sleep_Falling |  |  |  |  |
