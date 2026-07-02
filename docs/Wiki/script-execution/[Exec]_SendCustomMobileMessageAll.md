---
slug: "/Wiki/script-execution/Exec_SendCustomMobileMessageAll"
---

# [Exec]_SendCustomMobileMessageAll

Overview
==

* Sends a specific mobile message to all characters.

Details
==

| Parameter   | Description                            |
|-------------|----------------------------------------|
| BaseObject  | EntityId that will be used in the message text formatting |
| Command     | SendCustomMobileMessageAll             |
| S1          | CustomMessageId                        |

Sends the message with `CustomMessageId` to all unique NPCs under the `ResidanceFamily`.

You can use `{0}`, `{1}` in the message text for formatting, where:

- `{0}` is automatically replaced with **Self**'s name  
- `{1}` is automatically replaced with **Target**'s name

For example:  
If the message is `"Hello. The culprit is {0}."`, it will be displayed as:  
`"Hello. The culprit is 'ZoiName'."`

Examples
==

| Example                    | BaseObject | Command                   | S1                     | S2 | F1 | F2 | Prob |
|----------------------------|------------|----------------------------|------------------------|----|----|----|------|
| Send a mobile message to all | Self       | SendCustomMobileMessageAll | CustomMobileMessageId  |    |    |    |      |
