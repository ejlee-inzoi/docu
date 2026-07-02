---
slug: "/Wiki/script-condition/Cond_Buff"
---

# [Cond]_Buff

Overview
==

- Condition command that checks whether the object has a specific buff.
- **Note: Buffs are applied in the next tick of the script.**  
  + If you want to trigger something based on a previously applied buff, do not configure it in a single script's execution block. Instead, use the start or finish script of the buff to ensure intended behavior.

Parameters
==========

| Params      | Description |
|------------|-------------|
| BaseObject | Target object to check the condition |
| Command    | Buff |
| CompareType | Type of comparison operation |
| S1         | Buff ID to check on the target |

Examples
========

| Example | BaseObject | Command | CompareType | S1          | S2 | F1 | F2 | Prob |
|--------|------------|---------|-------------|-------------|----|----|----|------|
| If I have the Hungry buff | Self | Buff | Equal     | Hungry       |    |    |    |      |
| If I do not have the Hungry buff | Self | Buff | NotEqual  | Hungry       |    |    |    |      |
| If I have the Cleanliness buff | Self | Buff | Equal     | Cleanliness  |    |    |    |      |
