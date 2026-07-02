---
slug: "/Wiki/script-condition/Cond_GiftType"
---

# [Cond]_GiftType

Overview
==

* Used to check the type of a gift.

Parameters
==========

| Params      | Description                                |
|-------------|--------------------------------------------|
| BaseObject  | Only Target is used                        |
| Command     | GiftType                                   |
| CompareType | Type of comparison (Only Equal / NotEqual) |
| S1          | GiftType to compare                        |

Examples
========

| Example                                 | BaseObject | Command   | CompareType | S1           | S2 | F1 | F2 |
|-----------------------------------------|------------|-----------|-------------|--------------|----|----|----|
| If the gift is not of type Relationship |            | GiftType  | NotEqual    | Relationship |    |    |    |
| If the gift is of type Common           |            | GiftType  | Equal       | Common       |    |    |    |
