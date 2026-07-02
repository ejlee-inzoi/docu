---
slug: "/Wiki/script-execution/Exec_SendVisitMessage"
---

# [Exec]_SendVisitMessage

Overview
==

* Sends a mobile message when a character arrives at the scheduled meeting location.

Details
==

| Parameter   | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | Object to execute the command                                               |
| Command     | SendVisitMessage                                                            |
| S1          | String ID of the message. `{SiteName}` will be replaced with the location name. |

Examples
==

| Example                                                 | BaseObject | Command           | S1                                            | S2 | F1 | F2 | Prob |
|---------------------------------------------------------|------------|--------------------|-----------------------------------------------|----|----|----|------|
| Send visit arrival message to Target                    | Self       | SendVisitMessage   | Message_Schedule_FriendVisitArrived_Text      |    |    |    |      |
