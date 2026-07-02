---
slug: "/Wiki/script-condition/Cond_IsLocateSiteOnFire"
---

# [Cond]_IsLocateSiteOnFire

Overview
==

* Condition that checks whether the site the current character is located on is on fire.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | IsLocateSiteOnFire                       |
| CompareType | Comparison type (Equal / NotEqual)       |
| S1          | -                                        |
| S2          | -                                        |
| F1          | -                                        |
| F2          | -                                        |

Examples
========

| Example Description                                   | BaseObject | Command              | CompareType | S1 | S2 | F1 | F2 |
|-------------------------------------------------------|------------|-----------------------|-------------|----|----|----|----|
| If the site I am currently located on is on fire      | Self       | IsLocateSiteOnFire    | Equal       |    |    |    |    |
| If the site I am currently located on is NOT on fire  | Self       | IsLocateSiteOnFire    | NotEqual    |    |    |    |    |
