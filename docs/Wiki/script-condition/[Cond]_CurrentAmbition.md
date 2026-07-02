---
slug: "/Wiki/script-condition/Cond_CurrentAmbition"
---

# [Cond]_CurrentAmbition

Overview
==

- Checks the current Ambition status of a character (even if no Ambition is selected).

Parameters
==========

| Params      | Description                                             |
|-------------|---------------------------------------------------------|
| BaseObject  | Target object to check the condition                    |
| Command     | CurrentAmbition                                         |
| CompareType | Type of comparison operation                            |
| S1          | Ambition ID                                             |
| F1          | Ambition Step (used in comparison with CompareType)    |

Examples
========

| Example                                      | BaseObject | Command         | CompareType     | S1    | S2 | F1 | F2 | Prob |
|----------------------------------------------|------------|------------------|------------------|-------|----|----|----|------|
| If my "Rich" ambition is at step 2           | Self       | CurrentAmbition  | Equal            | Rich  |    | 2  |    |      |
| If my "Rich" ambition is below step 3        | Self       | CurrentAmbition  | Less             | Rich  |    | 3  |    |      |
| If my "Voice" ambition is at least step 2    | Self       | CurrentAmbition  | GreaterOrEqual   | Voice |    | 2  |    |      |
