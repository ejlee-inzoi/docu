---
slug: "/Wiki/script-condition/Cond_IsCohabitable"
---

# [Cond]_IsCohabitable

Overview
==

* Checks whether Self and Target can live together (cohabit).  
* **Cohabitation conditions**:

  + **General conditions**
    - They are not currently living together
    - Both are at least in the "Youth" age group

  + **Relationship condition**
    - If any of the following relationship stats exceed 30: Romance, FamilyLove, or Friendship
    - Priority: Romance = FamilyLove > Friendship  
      → Even if the given stat exceeds 30, the condition may fail due to lower priority

Parameter
=========

| Params      | Description                                                                                      |
|-------------|--------------------------------------------------------------------------------------------------|
| BaseObject  | Not used                                                                                         |
| Command     | IsCohabitable                                                                                    |
| CompareType | Type of comparison (Equal / NotEqual)                                                            |
| S1          | Relationship stat ID to compare<br>Even if this stat is over 30, higher-priority stats can override the result<br>Priority: Romance = FamilyLove > Friendship |

Examples
========

| Example Description                                         | BaseObject | Command        | CompareType | S1         | S2 | F1 | F2 |     |
|-------------------------------------------------------------|------------|----------------|-------------|------------|----|----|----|-----|
| If cohabitation is possible with the target (based on friendship stat) | Self       | IsCohabitable  | Equal       | friendship |    |    |    |     |
| If cohabitation is possible with the target (based on romance stat)    | Self       | IsCohabitable  | Equal       | romance    |    |    |    |     |
