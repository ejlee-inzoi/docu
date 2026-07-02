---
slug: "/Wiki/script-condition/Cond_IsFullHouseholdMembers"
---

# [Cond]_IsFullHouseholdMembers

Overview
==

* Checks whether the number of members in the BaseObject’s household has reached the maximum limit.

Parameter
=========

| Params      | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | The object to check the condition for                                       |
| Command     | IsFullHouseholdMembers                                                      |
| CompareType | Comparison type (Equal / NotEqual)                                          |
| S1          | Whether to ignore unborn children (`IgnorePregnancy`) when counting members |

Examples
========

| Example Description                                                             | BaseObject | Command                 | CompareType | S1               | S2 | F1 | F2 |
|---------------------------------------------------------------------------------|------------|--------------------------|-------------|------------------|----|----|----|
| If my household has reached the max number of members                          | Self       | IsFullHouseholdMembers   | Equal       |                  |    |    |    |
| If my household has NOT reached the max number of members                      | Self       | IsFullHouseholdMembers   | NotEqual    |                  |    |    |    |
| If my household, excluding unborn babies, has reached the max member limit     | Self       | IsFullHouseholdMembers   | Equal       | IgnorePregnancy  |    |    |    |
