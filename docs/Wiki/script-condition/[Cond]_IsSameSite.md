---
slug: "/Wiki/script-condition/Cond_IsSameSite"
---

# [Cond]_IsSameSite

Overview
==

* Checks whether `Self` and `Target` are currently located on the same site (lot).

Parameter
=========

| Params      | Description                                |
|-------------|--------------------------------------------|
| Command     | IsSameSite                                 |
| CompareType | Comparison type (Equal / NotEqual)         |

Examples
========

| Example Description                             | BaseObject | Command     | CompareType | S1 | S2 | F1 | F2 | Prob |
|-------------------------------------------------|------------|--------------|-------------|----|----|----|----|-------|
| If Self and Target are on the same site         | Self       | IsSameSite   | Equal       |    |    |    |    |       |
| If Self and Target are NOT on the same site     | Self       | IsSameSite   | NotEqual    |    |    |    |    |       |
