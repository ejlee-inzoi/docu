---
slug: "/Wiki/script-condition/Cond_HaveCurrency"
---

# [Cond]_HaveCurrency

Overview
==

* Checks the current amount of currency held by Joy.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | HaveCurrency                             |
| CompareType | Type of comparison                       |
| F1          | Currency amount to compare against       |
|             |                                          |

Examples
========

| Example Description                                 | BaseObject | Command      | CompareType     | S1 | S2 | F1  | F2 |
|-----------------------------------------------------|------------|--------------|------------------|----|----|-----|----|
| If Joy has 0 or less currency                       | Self       | HaveCurrency | LessOrEqual      |    |    | 0   |    |
| If Joy has 100 or more currency                     | Self       | HaveCurrency | GreaterOrEqual   |    |    | 100 |    |
