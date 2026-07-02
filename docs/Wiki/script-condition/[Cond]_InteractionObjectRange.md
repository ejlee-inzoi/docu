---
slug: "/Wiki/script-condition/Cond_InteractionObjectRange"
---

# [Cond]_InteractionObjectRange

Overview
==

* Checks whether an object capable of a specific interaction bag exists within a certain distance from the Self object.  
* Does not use `CompareType`.

Parameter
=========

| Params      | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | The object to check the condition for                                       |
| Command     | InteractionObjectRange                                                      |
| S1          | InteractionBag ID                                                           |
| F1          | Distance threshold (checks if object is within this distance from Self)     |

Examples
========

| Example Description                                                              | BaseObject | Command                | CompareType | S1       | S2 | F1   | F2 |
|----------------------------------------------------------------------------------|------------|-------------------------|-------------|----------|----|------|----|
| Is there an object within 1000 units that allows the "SitTalk" interaction?     | Self       | InteractionObjectRange  |             | SitTalk |    | 1000 |    |
