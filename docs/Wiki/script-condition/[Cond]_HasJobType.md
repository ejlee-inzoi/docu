---
slug: "/Wiki/script-condition/Cond_HasJobType"
---

# [Cond]_HasJobType

Overview
==

* Condition to check the employment classification type of the character's current job.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for    |
| Command     | HasJobType                               |
| CompareType | Type of comparison                       |
| S1          | Employment type: FullTime, PartTime, Freelancer |

Examples
========

| Example                                               | BaseObject | Command     | CompareType | S1         | S2 | F1 | F2 |
|-------------------------------------------------------|------------|-------------|-------------|------------|----|----|----|
| If I have a FullTime job                              | Self       | HasJobType  | Equal       | FullTime   |    |    |    |
| If I have a PartTime job                              | Self       | HasJobType  | Equal       | PartTime   |    |    |    |
| If I have a Freelancer job                            | Self       | HasJobType  | Equal       | Freelancer |    |    |    |
