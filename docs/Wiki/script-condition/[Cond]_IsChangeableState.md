---
slug: "/Wiki/script-condition/Cond_IsChangeableState"
---

# [Cond]_IsChangeableState

Overview
==

* Condition command that checks whether the target object is capable of entering a specific state.

Parameter
=========

| Params      | Description                                         |
|-------------|-----------------------------------------------------|
| BaseObject  | The object to check the condition for               |
| Command     | IsChangeableState                                   |
| CompareType | Type of comparison (Equal / NotEqual)               |
| S1          | StateGroup ID of the target                         |
| S2          | State ID to check within the specified group        |

Examples
========

| Example Description                                           | BaseObject | Command           | CompareType | S1     | S2     |
|---------------------------------------------------------------|------------|--------------------|-------------|--------|--------|
| If the target can enter the "Broken" state                    | target     | State              | Equal       | Broken | Broken |
| If the target cannot enter the "Broken" state                 | target     | State              | NotEqual    | Broken | Broken |
| If the target can enter the "Fire" state                      | target     | State              | Equal       | Fire   | Fire   |
