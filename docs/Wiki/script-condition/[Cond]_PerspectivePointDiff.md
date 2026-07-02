---
slug: "/Wiki/script-condition/Cond_PerspectivePointDiff"
---

# [Cond]_PerspectivePointDiff

Overview
==

* When two participants are involved (e.g., in cooperative actions or conversations),  
  compares the **difference** between their scores in a specific perspective (`S1`) against a value (`F1`) using `CompareType`.

Parameter
=========

| Params      | Description                                              |
|-------------|----------------------------------------------------------|
| BaseObject  | Self or Target (used as part of participant pair)        |
| Command     | PerspectivePointDiff                                     |
| CompareType | Type of comparison (Equal, Greater, Less, etc.)          |
| S1          | Perspective ID to compare (e.g., Freedom)                |
| F1          | Threshold difference value                               |

Examples
========

| Example Description                                                    | BaseObject | Command              | CompareType     | S1       | S2   | F1   | F2 |
|------------------------------------------------------------------------|------------|-----------------------|------------------|----------|------|------|----|
| If the difference in Freedom perspective between participants is ≥ 50 | Self       | PerspectivePointDiff  | GreaterOrEqual   | Freedom  | None | 50.0 |    |
