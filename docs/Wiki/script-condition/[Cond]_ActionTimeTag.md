---
slug: "/Wiki/script-condition/Cond_ActionTimeTag"
---

# [Cond]_ActionTimeTag

Overview
==

- Checks whether an action with a specific Action Tag has been performed **continuously** for a certain period of time.

- **Continuously:** If a different interaction is performed within `n` seconds after performing a certain action, the accumulated time is maintained (`DA_GameConfig::ActionTimeResetDelay`).

Parameters
==========

| Params      | Description |
|------------|-------------|
| BaseObject | Target object to check the condition |
| Command    | ActionTimeTag |
| CompareType | Type of comparison operation |
| S1         | Action Tag name |
| F1         | Time value to compare against |

Examples
========

| Example | BaseObject | Command       | CompareType | S1       | S2 | F1  | F2 | Prob |
|--------|------------|---------------|-------------|----------|----|-----|----|------|
| If an action with the Piano tag was performed continuously for more than 10 seconds | Self | ActionTimeTag | Greater     | Piano    |    | 10  |    |      |
| If an action with the Computer tag was performed continuously for more than 300 seconds | Self | ActionTimeTag | Greater     | Computer |    | 300 |    |      |
