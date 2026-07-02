---
slug: "/Wiki/script-condition/Cond_IsSameSiteEventRole"
---

# [Cond]_IsSameSiteEventRole

Overview
==

* Checks whether `Self` and `Target` are playing the **same role** within a site or social event.

Parameter
=========

| Params      | Description                                |
|-------------|--------------------------------------------|
| Command     | IsSameSiteEventRole                        |
| CompareType | Comparison type (Equal / NotEqual)         |

Examples
========

| Example Description                                           | BaseObject | Command              | CompareType | S1 | S2 | F1 | F2 | Prob |
|---------------------------------------------------------------|------------|-----------------------|-------------|----|----|----|----|-------|
| If Self and Target have the same role in the event            | Self       | IsSameSiteEventRole   | Equal       |    |    |    |    |       |
| If Self and Target do NOT have the same role in the event     | Self       | IsSameSiteEventRole   | NotEqual    |    |    |    |    |       |
