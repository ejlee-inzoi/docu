---
slug: "/Wiki/script-execution/Exec_RumorEvent"
---

# [Exec]_RumorEvent

Overview
==

* Triggers an event via a rumor.  
* Events can be set up to send a CustomMessage when specific conditions are met.

Details
==

| Parameter   | Description                   |
|-------------|-------------------------------|
| BaseObject  | Object to execute the command |
| Command     | RumorEvent                    |
| S1          | RumorEvent ID (from RumorEvent.json) |
| S2          | -                             |
| F1          | -                             |
| F2          | -                             |

Examples
==

| Example                              | BaseObject | Command    | S1         | S2 | F1 | F2 | Prob |
|--------------------------------------|------------|------------|------------|----|----|----|------|
| Trigger a specific RumorEvent        | Self       | RumorEvent | RumorTest  |    |    |    | 1.0  |
