---
slug: "/Wiki/script-condition/Cond_CanBecomeGhost"
---

# [Cond]_CanBecomeGhost

Overview
==

- Returns whether the character is in a state where it can become a ghost.

Parameters
==========

| Params      | Description |
|------------|-------------|
| BaseObject | Target object to check the condition |
| Command    | CanBecomeGhost |
| CompareType | Type of comparison operation |

Examples
========

| Example                                     | BaseObject | Command        | CompareType | S1 | S2 | F1 | F2 |
|--------------------------------------------|------------|----------------|-------------|----|----|----|----|
| If the selected character can become a ghost     | Self      | CanBecomeGhost | Equal       |    |    |    |    |
| If the selected character cannot become a ghost  | Self      | CanBecomeGhost | NotEqual    |    |    |    |    |
