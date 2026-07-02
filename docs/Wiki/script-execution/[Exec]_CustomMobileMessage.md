---
slug: "/Wiki/script-execution/Exec_CustomMobileMessage"
---

# [Exec]_CustomMobileMessage

Overview
==

* Sends a custom mobile message to the recipient.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | Must be set to Self. (Sender and Receiver are determined through `MobileMessageParties.json`) |
| Command | CustomMobileMessage |
| S1 | CustomMobileMessageId (linked to `CustomMobileMessage.json`) |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Send a donation thank-you text message | Self | CustomMobileMessage | Atm_Donation_Result |  |  |  |  |
