---
slug: "/Wiki/script-execution/Exec_RandomResult"
---

# [Exec]_RandomResult

Overview
==

* Executes one outcome from multiple possible results probabilistically, based on the current character's skill level.

Details
==

| Parameter   | Description                     |
|-------------|---------------------------------|
| BaseObject  | Object to execute the command   |
| Command     | RandomResult                    |
| S1          | RandomResult Data Table ID      |

Examples
==

| Example                                               | BaseObject | Command      | S1                          | S2 | F1  | F2 | Prob |
|-------------------------------------------------------|------------|--------------|-----------------------------|----|-----|----|------|
| Execute one of the RandomResult outcomes on self      | Self       | RandomResult | RandomResult_WriteFairytale |    | 0.1 |    |      |
