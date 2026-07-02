---
slug: "/Wiki/script-execution/Exec_SystemMessage"
---

# [Exec]_SystemMessage

Overview
==

* Displays a system message to the user.  
* The message is linked via a StringTable ID from **Text_Message.json**.  
  - Format: **Prefix:** `Message_` + **ID** + **Postfix:** `_Text`

Details
==

| Parameter   | Description                                                               |
|-------------|---------------------------------------------------------------------------|
| BaseObject  | Object to execute the command                                             |
| Command     | SystemMessage                                                             |
| S1          | String ID of the message (e.g., Message_Taro_1_Text)                      |
| F1          | Duration to display the message (in seconds); must be explicitly defined  |

Examples
==

| Example                                                            | BaseObject | Command        | S1                     | S2 | F1 | F2 | Prob |
|--------------------------------------------------------------------|------------|----------------|------------------------|----|----|----|------|
| Display "Message_Taro_1_Text" to self for 3 seconds                | Self       | SystemMessage  | Message_Taro_1_Text    |    | 3  |    |      |
