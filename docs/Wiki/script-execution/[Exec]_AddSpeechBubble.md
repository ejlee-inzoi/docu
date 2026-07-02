---
slug: "/Wiki/script-execution/Exec_AddSpeechBubble"
---

# [Exec]_AddSpeechBubble

Overview
==

* Displays a speech bubble.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | AddSpeechBubble |
| S1 | SpeechBubble ID |
| F1 | Delay time before display (in seconds) |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Display a speech bubble on myself | Self | AddSpeechBubble | SpeechBubbleID |  |  |  |  |
| Display a speech bubble on myself after 3 seconds | Self | AddSpeechBubble | SpeechBubbleID |  | 3 |  |  |
| Display a speech bubble on the target after 5 seconds | Target | AddSpeechBubble | SpeechBubbleID |  | 5 |  |  |
