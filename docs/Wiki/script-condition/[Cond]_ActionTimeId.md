---
slug: "/Wiki/script-condition/Cond_ActionTimeId"
---


# \[Cond]\_ActionTimeId

# Overview

* Checks whether a specific **Action Id** has been performed **continuously** for a certain period of time.

* **Continuously**: If a different interaction is performed within `n` seconds after performing a certain action, the accumulated time is maintained (`DA_GameConfig::ActionTimeResetDelay`).

# Parameters

| Params      | Description                          |
| ----------- | ------------------------------------ |
| BaseObject  | Target object to check the condition |
| Command     | ActionTimeId                         |
| CompareType | Type of comparison operation         |
| S1          | ActionId                             |
| F1          | Time value to compare against        |

# Examples

| Example                                                                                         | BaseObject | Command      | CompareType | S1            | S2 | F1  | F2 | Prob |
| ----------------------------------------------------------------------------------------------- | ---------- | ------------ | ----------- | ------------- | -- | --- | -- | ---- |
| If the action with ActionId `Piano_Play` was performed continuously for more than 10 seconds    | Self       | ActionTimeId | Greater     | Piano\_Play   |    | 10  |    |      |
| If the action with ActionId `Computer_Use` was performed continuously for more than 300 seconds | Self       | ActionTimeId | Greater     | Computer\_Use |    | 300 |    |      |
