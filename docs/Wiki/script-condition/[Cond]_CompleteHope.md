---
slug: "/Wiki/script-condition/Cond_CompleteHope"
---

# [Cond]_CompleteHope

Overview
==

- Checks the number of completed Hopes for a character.

Parameters
==========

| Params      | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | Target object to check the condition                                        |
| Command     | CompleteHope                                                                |
| CompareType | Type of comparison operation                                                |
| S1          | Hope ID to check for specific hope completion count. If omitted, checks total completed Hopes. |
| F1          | Number of times the hope (or total hopes) must be completed. Defaults to 1 if omitted. |

Examples
========

| Example                                           | BaseObject | Command       | CompareType     | S1          | S2 | F1  | F2 | Prob |
|---------------------------------------------------|------------|----------------|------------------|-------------|----|-----|----|------|
| If I have completed 10 or more hopes in total     | Self       | CompleteHope   | GreaterOrEqual   |             |    | 10  |    |      |
| If I have completed the "GetCurrency" hope once   | Self       | CompleteHope   | Equal            | GetCurrency |    |     |    |      |
| If I have completed the "GetCurrency" hope 10 times| Self      | CompleteHope   | Equal            | GetCurrency |    | 10  |    |      |
