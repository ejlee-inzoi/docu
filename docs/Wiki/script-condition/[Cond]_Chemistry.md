---
slug: "/Wiki/script-condition/Cond_Chemistry"
---

# [Cond]_Chemistry

Overview
==

- Compares the chemistry level of the specified `S1` relationship between Self and Target against `S2`.

Parameters
==========

| Params      | Description                                            |
|-------------|--------------------------------------------------------|
| Command     | Chemistry                                              |
| CompareType | Type of comparison operation                          |
| S1          | Relationship name defined in `RelationshipStat`       |
| S2          | Chemistry level defined in `TraitChemistryReward`     |

Examples
========

| Example                                       | BaseObject | Command   | CompareType | S1         | S2       | F1 | F2 | Prob |
|-----------------------------------------------|------------|-----------|-------------|------------|----------|----|----|------|
| If the two characters' friendship chemistry is VeryGood | Self       | Chemistry | Equal       | Friendship | VeryGood |    |    |      |
