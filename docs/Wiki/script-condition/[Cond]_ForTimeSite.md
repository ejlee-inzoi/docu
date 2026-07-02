---
slug: "/Wiki/script-condition/Cond_ForTimeSite"
---

# [Cond]_ForTimeSite

Overview
==

* Checks whether the character has stayed at home or in a specific site for a certain amount of time.

Parameters
==========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | Object to check the condition on         |
| Command     | ForTimeSite                              |
| CompareType | Type of comparison                       |
| S1          | "Home" for own house, or specific SiteID |
| F1          | Duration spent at the site (in hours)    |

Examples
========

| Example                                   | BaseObject | Command     | CompareType     | S1   | S2 | F1 | F2 |
|-------------------------------------------|------------|-------------|------------------|------|----|----|----|
| If I have not stayed at home for 3 hours  | Self       | ForTimeSite | NotEqual         | Home |    | 3  |    |
| If I have stayed at home for 3 hours or more | Self    | ForTimeSite | GreaterOrEqual   | Home |    | 3  |    |
