---
slug: "/Wiki/script-execution/Exec_AddFamilyMonitoringNotification"
---

# [Exec]_AddFamilyMonitoringNotification

Overview
==

* Adds a notification to the **Family Monitoring Bulletin Board** of both Self and Target.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The subject of the notification |
| Command | AddFamilyMonitoringNotification |
| S1 | FamilyMonitoringNotificationId |
| F1 | Notification delay time (HHMM format) (e.g., 230 means the notification is sent 2 hours and 30 minutes after the script is triggered) |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fire alert is sent to the family bulletin boards of both Self and Target | Self | AddFamilyMonitoringNotification | FireAlert |  | 230 |  |  |
