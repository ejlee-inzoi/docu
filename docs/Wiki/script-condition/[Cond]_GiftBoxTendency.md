---
slug: "/Wiki/script-condition/Cond_GiftBoxTendency"
---

# [Cond]_GiftBoxTendency

Overview
==

* Checks whether the Target is a gift box, and whether the gift inside is positive or negative.

Parameters
==========

| Params      | Description                                      |
|-------------|--------------------------------------------------|
| BaseObject  | Object to check the condition (only Target used) |
| Command     | GiftBoxTendency                                  |
| CompareType | Type of comparison                               |
| S1          | Type of gift (Positive / Negative)               |

Examples
========

| Example                                               | BaseObject | Command          | CompareType | S1       | S2 | F1 | F2 |
|-------------------------------------------------------|------------|------------------|-------------|----------|----|----|----|
| If the target is a gift box and contains a positive gift | Target     | GiftBoxTendency  | Equal       | Positive |    |    |    |
| If the target is a gift box and contains a negative gift | Target     | GiftBoxTendency  | Equal       | Negative |    |    |    |
