---
slug: "/Wiki/script-condition/Cond_IsPregnancyState"
---

# [Cond]_IsPregnancyState

Overview
==

* Checks the current pregnancy state of the BaseObject.  
* Refer to `PregnancyStates` in `DA_Life`.  
* **Note:** If `S1` is left blank, only `Equal` and `NotEqual` comparisons are valid.  
* A character is considered pregnant even before they are aware of it (e.g. `PregnancyTest` stage).

Parameter
=========

| Params      | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | The character to check (Self / Target)                                      |
| Command     | IsPregnancyState                                                            |
| CompareType | Comparison type (Equal / NotEqual / Greater / GreaterOrEqual / Less / LessOrEqual) |
| S1          | Pregnancy state ID (from DA_Life's PregnancyStates)                         |

Examples
========

| Example Description                                                    | BaseObject | Command           | CompareType     | S1               | S2 | F1 | F2 | Prob |
|------------------------------------------------------------------------|------------|--------------------|------------------|------------------|----|----|----|-------|
| If I am not pregnant                                                   | Self       | IsPregnancyState   | NotEqual         |                  |    |    |    |       |
| If the target is pregnant                                              | Target     | IsPregnancyState   | Equal            |                  |    |    |    |       |
| If I am pregnant but have not yet confirmed it with a test            | Self       | IsPregnancyState   | Equal            | PregnancyTest    |    |    |    |       |
| If I am in early pregnancy                                             | Self       | IsPregnancyState   | Equal            | PregnancyEarly   |    |    |    |       |
| If I am in mid-pregnancy or beyond                                     | Self       | IsPregnancyState   | GreaterOrEqual   | PregnancyMid     |    |    |    |       |
| If I am past early pregnancy                                           | Self       | IsPregnancyState   | Greater          | PregnancyEarly   |    |    |    |       |
| If I am in a pregnancy stage earlier than mid-pregnancy               | Self       | IsPregnancyState   | Less             | PregnancyMid     |    |    |    |       |
| If I am in early pregnancy or earlier                                  | Self       | IsPregnancyState   | LessOrEqual      | PregnancyEarly   |    |    |    |       |
| If I am in the final stage before giving birth                         | Self       | IsPregnancyState   | Equal            | ImminentBirth    |    |    |    |       |
