---
slug: "/Wiki/script-condition/Cond_CheckDiceWithRoll"
---

# [Cond]_CheckDiceWithRoll

Overview
==

- A condition command that uses a dice roll to determine outcome probabilistically.  
- The dice rolls a random number between 1 and 100.  
- The dice value is valid only within the ScriptContext.  
- This command **always** rolls a new dice and checks the result.

Parameters
==========

| Params      | Description                                                  |
|-------------|--------------------------------------------------------------|
| BaseObject  | Target object to check the condition                         |
| Command     | CheckDiceWithRoll                                            |
| F1          | Minimum value of dice range                                  |
| F2          | Maximum value of dice range                                  |
| CompareType | Use Equal if within F1~F2 range, NotEqual if outside range   |

Difference from `CheckDice`:
- `CheckDice`: Uses the existing dice if available; rolls only if not already rolled.
- `CheckDiceWithRoll`: Always rolls a new dice and checks the result.

Examples
========

| Example                                                | BaseObject | Command            | CompareType | S1 | S2 | F1 | F2 |
|--------------------------------------------------------|------------|---------------------|-------------|----|----|----|----|
| Roll a new dice and apply if the result is between 1~50 | Self       | CheckDiceWithRoll  | Equal       |    |    | 1  | 50 |
