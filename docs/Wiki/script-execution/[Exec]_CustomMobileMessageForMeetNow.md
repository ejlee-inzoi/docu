---
slug: "/Wiki/script-execution/Exec_CustomMobileMessageForMeetNow"
---

# [Exec]_CustomMobileMessageForMeetNow

Overview
==

* Sends a mobile message to invite players to meet at a specific location.  
* The meeting time is dynamically determined based on the player's reply time.  
  (e.g., if the player replies at 2:30, the meeting will be scheduled from 2:00 to 4:00 by default.)

**Important:**  
+ The meeting will only be scheduled for the **same day** the player replies to the message.

Details
==

| Parameter | Description |
| --- | --- |
| Command | CustomMobileMessageForMeetNow |
| S1 | CustomMobileMessageId (from CustomMobileMessage.json) |
| S2 | Target Site ID (from Site.json) |
| F1 | Duration of the meeting in hours (must be ≥ 0) |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Send a meetup message to gather at "PcCafe" (default 2 hours) |  | CustomMobileMessageForMeetNow | CustomMobileMessageId | Gangnam_Business_PcCafe |  |  |  |
| Schedule a 5-hour meetup at "CentralPark" |  | CustomMobileMessageForMeetNow | CustomMobileMessageId | Gangnam_Public_CentralPark | 5 |  |  |
