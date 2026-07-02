---
slug: "/Wiki/script-execution/Exec_SendGiftBox"
---

# [Exec]_SendGiftBox

Overview
==

* Sends a gift to a specified target.  
* The recipient will automatically receive a mobile message using the `MobileMessageSendGiftTextId` defined in `DA_Relationship`.

Details
==

| Parameter   | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | Irrelevant. Typically, Self is the sender and Target is the recipient.     |
| Command     | SendGiftBox                                                                 |
| S1          | Gift ID defined in `RelationshipGift.json`                                 |
| S2          | (Optional) ID from `MobileMessageParties` to specify sender/receiver roles |

Examples
==

| Example                                             | BaseObject | Command     | S1          | S2 | F1 | F2 | Prob |
|-----------------------------------------------------|------------|-------------|-------------|----|----|----|------|
| Send gift [friendship1] from Self to Target         |            | SendGiftBox | friendship1 |    |    |    |      |
