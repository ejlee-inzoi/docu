---
slug: "/Wiki/script-condition/Cond_Age"
---

# [Cond]_Age

Overview
==

- Condition command that compares the age of an object.

Parameters
==========

| Params      | Description |
|------------|-------------|
| BaseObject | Target object to check the condition |
| Command    | Age |
| CompareType | Type of comparison operation |
| F1         | Age value to compare against |

Examples
========

| Example | BaseObject | Command | CompareType     | S1 | S2 | F1 | F2 | Prob |
|--------|------------|---------|-----------------|----|----|----|----|------|
| If my age is less than 19 | Self | Age | Less            |    |    | 19 |    |      |
| If my age is greater than 19 | Self | Age | Greater         |    |    | 19 |    |      |
| If my age is equal to 19 | Self | Age | Equal           |    |    | 19 |    |      |
| If the target's age is greater than or equal to 30 | Target | Age | GreaterOrEqual  |    |    | 30 |    |      |
| If the target's age is less than or equal to 25 | Target | Age | LessOrEqual     |    |    | 25 |    |      |
