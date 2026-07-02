---
slug: "/Wiki/script-condition/Cond_IsSeized"
---

# [Cond]_IsSeized

Overview
==

* Checks whether the target object is currently in a **seized** state.

Parameter
=========

|           | Description                                                                                     |
|-----------|-------------------------------------------------------------------------------------------------|
| BaseObject | The object to check the condition for                                                           |
| Command    | IsSeized                                                                                        |
| CompareType | Must be `Equal`                                                                                |
| S1         | If provided, compares the object's state to this value. <br>If empty, checks if the state is one of the following:<br>• `Seizure`<br>• `WaterCutoff`<br>• `ElectricityCutoff` |

Examples
========

| Description                                | BaseObject | Command  | CompareType | S1           |   |   |   |   |
|--------------------------------------------|------------|----------|-------------|--------------|---|---|---|---|
| Is the object in `WaterCutoff` state?      | Target     | IsSeized | Equal       | WaterCutoff  |   |   |   |   |
| Is the object in a seized-related state?   | Target     | IsSeized | Equal       |              |   |   |   |   |
