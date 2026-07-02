---
slug: "/Wiki/script-condition/Cond_CompleteAmbition"
---

# [Cond]_CompleteAmbition

Overview
==

- Checks whether a character has completed a specific ambition.

Parameters
==========

| Params      | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | Target object to check the condition                                        |
| Command     | CompleteAmbition                                                            |
| CompareType | Type of comparison (Equal / NotEqual for S1-based check)                   |
| S1          | Ambition ID to check for completion (used with Equal / NotEqual only)      |
| F1          | If set, ignores `S1` and checks the total number of completed ambitions     |

Examples
========

| Example                                             | BaseObject | Command          | CompareType     | S1   | S2 | F1 | F2 | Prob |
|-----------------------------------------------------|------------|------------------|------------------|------|----|----|----|------|
| If I have completed 5 or more ambitions             | Self       | CompleteAmbition | GreaterOrEqual   |      |    | 5  |    |      |
| If I have completed the "Rich" ambition             | Self       | CompleteAmbition | Equal            | Rich |    |    |    |      |
| If I have not completed the "Rich" ambition         | Self       | CompleteAmbition | NotEqual         | Rich |    |    |    |      |
