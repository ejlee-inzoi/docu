---
slug: "/Wiki/script-condition/Cond_CheckDice"
---

# [Cond]_CheckDice

Overview
==

- A condition command that uses a dice roll to determine outcome probabilistically.  
- The dice rolls a random number between 1 and 100.  
- The dice value is valid only within the ScriptContext.  
- If a dice value already exists, it checks that value. If not, it rolls a new dice and checks.

Parameters
==========

| Params      | Description                                                  |
|-------------|--------------------------------------------------------------|
| BaseObject  | Target object to check the condition                         |
| Command     | CheckDice                                                    |
| F1          | Minimum value of dice range                                  |
| F2          | Maximum value of dice range                                  |
| CompareType | Use Equal if within F1~F2 range, NotEqual if outside range   |

Difference from `CheckDiceWithRoll`:
- `CheckDice`: Uses the existing dice if available; rolls and checks only if not rolled.
- `CheckDiceWithRoll`: Always rolls a new dice and checks the result.

Examples
========

| Example                                            | BaseObject | Command    | CompareType | S1 | S2 | F1 | F2 |
|----------------------------------------------------|------------|------------|-------------|----|----|----|----|
| Apply if the previously rolled dice is between 1~50 | Self       | CheckDice  | Equal       |    |    | 1  | 50 |
| Apply if the previously rolled dice is between 1~30 | Self       | CheckDice  | Equal       |    |    | 1  | 30 |
| Apply if the previously rolled dice is not between 1~30 | Self    | CheckDice  | NotEqual    |    |    | 1  | 30 |
