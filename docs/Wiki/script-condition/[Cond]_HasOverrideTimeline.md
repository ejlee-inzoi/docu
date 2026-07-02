---
slug: "/Wiki/script-condition/Cond_HasOverrideTimeline"
---

# [Cond]_HasOverrideTimeline

Overview
==

* Condition command that checks whether a specific Override Timeline is currently active.

Parameter
=========

| Params      | Description                                      |
|-------------|--------------------------------------------------|
| BaseObject  | The object to check the condition for            |
| Command     | HasOverrideTimeline                              |
| CompareType | Type of comparison (Equal / NotEqual only)       |
| S1          | Timeline ID to check                             |
| S2          | Day of the week to verify                        |

Examples
========

| Example Description                                                                      | BaseObject | Command             | CompareType | S1                                     | S2        | F1 | F2 |
|------------------------------------------------------------------------------------------|------------|----------------------|-------------|------------------------------------------|-----------|----|----|
| Check if the "Event_SpaceTravel_Sunday_0900_2300" timeline is overridden on Wednesday    | Self       | HasOverrideTimeline  | Equal       | Event_SpaceTravel_Sunday_0900_2300       | Wednesday |    |    |
| Check if the "Event_SpaceTravel_Sunday_0900_2300" timeline is NOT overridden on Monday   | Self       | HasOverrideTimeline  | NotEqual    | Event_SpaceTravel_Sunday_0900_2300       | Monday    |    |    |
