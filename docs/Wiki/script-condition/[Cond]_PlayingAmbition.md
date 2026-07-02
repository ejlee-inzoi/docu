---
slug: "/Wiki/script-condition/Cond_PlayingAmbition"
---

# [Cond]_PlayingAmbition

Overview
==

* Checks whether the character is currently playing a specific **Ambition**.  
* Optionally, it can also verify the specific **step** of the ambition if `F1` is greater than 0.

Parameter
=========

| Params      | Description                                                              |
|-------------|--------------------------------------------------------------------------|
| BaseObject  | The object to evaluate (usually Self)                                     |
| Command     | PlayingAmbition                                                           |
| CompareType | Comparison type (Equal / NotEqual only)                                   |
| S1          | Ambition ID to check                                                      |
| F1          | Ambition step (optional – ignored if `F1 <= 0`)                           |

Examples
========

| Example Description                                       | BaseObject | Command         | CompareType | S1     | S2 | F1 | F2 | Prob |
|-----------------------------------------------------------|------------|------------------|-------------|--------|----|----|----|-------|
| If I am currently playing the "Rich" ambition             | Self       | PlayingAmbition  | Equal       | Rich   |    |    |    |       |
| If I am currently playing the "Rich" ambition at step 2   | Self       | PlayingAmbition  | Equal       | Rich   |    | 2  |    |       |
| If I am currently playing the "Voice" ambition at step 3  | Self       | PlayingAmbition  | Equal       | Voice  |    | 3  |    |       |
