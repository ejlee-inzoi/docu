---
slug: "/Wiki/script-condition/Cond_Gender"
---

# [Cond]_Gender

Overview
==

* Command to check the current gender of an avatar.

Parameters
==========

| Params      | Description                          |
|-------------|--------------------------------------|
| BaseObject  | Object to check the condition on     |
| Command     | Gender                               |
| CompareType | Type of comparison                   |
| S1          | Gender value to compare (Male / Female) |

**EB1GenderType (Enum)**
=========================

Enum used to classify gender.

| Value  | Description |
|--------|-------------|
| Male   | Male        |
| Female | Female      |

Examples
========

| Example                              | BaseObject | Command | CompareType | S1     | S2 | F1 | F2 | Prob |
|--------------------------------------|------------|---------|-------------|--------|----|----|----|------|
| If my gender is male                 | Self       | Gender  | Equal       | Male   |    |    |    |      |
| If my gender is not female           | Self       | Gender  | NotEqual    | Female |    |    |    |      |
| If the target's gender is female     | Target     | Gender  | Equal       | Female |    |    |    |      |
