---
slug: "/Wiki/script-condition/Cond_IsGiftBoxOwner"
---

# [Cond]_IsGiftBoxOwner

Overview
==

* Condition that checks whether the target is a gift box object and whether the BaseObject is the owner of the gift.

Parameter
=========

| Params      | Description                                             |
|-------------|---------------------------------------------------------|
| BaseObject  | The object to check the condition for (only Target is used) |
| Command     | IsGiftBoxOwner                                          |
| CompareType | Type of comparison                                      |

Examples
========

| Example Description                                 | BaseObject | Command         | CompareType | S1 | S2 | F1 | F2 |
|-----------------------------------------------------|------------|------------------|-------------|----|----|----|----|
| If the target is a gift box and I am the owner      | Target     | IsGiftBoxOwner   | Equal       |    |    |    |    |
