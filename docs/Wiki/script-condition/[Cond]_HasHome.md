---
slug: "/Wiki/script-condition/Cond_HasHome"
---

# [Cond]_HasHome

Overview
==

* Checks whether the current BaseObject owns a home.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for    |
| Command     | HasHome                                  |
| CompareType | Type of comparison (Equal / NotEqual)    |

Examples
========

| Example                           | BaseObject | Command  | CompareType | S1 | S2 | F1 | F2 |
|-----------------------------------|------------|----------|-------------|----|----|----|----|
| If I own a home                   | Self       | HasHome  | Equal       |    |    |    |    |
| If I do not own a home           | Self       | HasHome  | NotEqual    |    |    |    |    |
