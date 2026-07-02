---
slug: "/Wiki/script-condition/Cond_EnteredSiteHasTag"
---

# [Cond]_EnteredSiteHasTag

Overview
==

* Checks whether the site the target is currently located in has a specific tag.

Parameters
==========

| Params      | Description                       |
|-------------|-----------------------------------|
| Command     | EnteredSiteHasTag                 |
| CompareType | Equal / NotEqual                  |
| S1          | Tag to check                      |
| S2          | -                                 |
| F1          | -                                 |
| F2          | -                                 |

Examples
========

| Example                                         | BaseObject | Command            | CompareType | S1  | S2 | F1 | F2 |
|-------------------------------------------------|------------|---------------------|-------------|-----|----|----|----|
| If the site I am in has the tag "ABC"           | Self       | EnteredSiteHasTag   | Equal       | ABC | -  | -  | -  |
