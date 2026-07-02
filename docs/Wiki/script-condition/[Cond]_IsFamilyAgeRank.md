---
slug: "/Wiki/script-condition/Cond_IsFamilyAgeRank"
---

# [Cond]_IsFamilyAgeRank

Overview
==

* Checks the character’s age rank within their family.

Parameter
=========

| Parameter   | Description                                  |
|-------------|----------------------------------------------|
| BaseObject  | The object to check the condition for         |
| CompareType | Type of comparison                            |
| F1          | Age rank to compare within the family         |

Examples
========

| Description                                         | BaseObject | CompareType     | S1 | S2 | F1 | F2 |     |
|-----------------------------------------------------|------------|------------------|----|----|----|----|-----|
| Am I ranked 1st in age within my family?            | Self       | Equal            |    |    | 1  |    |     |
| Is the target ranked 2nd or higher in family age?   | Target     | GreaterOrEqual   |    |    | 2  |    |     |
| Am I ranked 3rd or lower in family age?             | Self       | LessOrEqual      |    |    | 3  |    |     |
