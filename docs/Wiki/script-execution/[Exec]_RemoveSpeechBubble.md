---
slug: "/Wiki/script-execution/Exec_RemoveSpeechBubble"
---

# [Exec]_RemoveSpeechBubble

Overview
==

* Removes the SpeechBubble currently displayed on a Joy.

Details
==

| Parameter   | Description                     |
|-------------|---------------------------------|
| BaseObject  | Object to execute the command   |
| Command     | RemoveSpeechBubble              |
| S1          | SpeechBubbleID                  |
| F1          | DelayTime (in seconds)          |

Examples
==

| Example                                  | BaseObject | Command            | S1              | S2 | F1 | F2 | Prob |
|------------------------------------------|------------|--------------------|------------------|----|----|----|------|
| Remove speech bubble attached to self    | Self       | RemoveSpeechBubble | SpeechBubbleID   |    |    |    |      |
| Remove speech bubble attached to target  | Target     | RemoveSpeechBubble | SpeechBubbleID   |    |    |    |      |
