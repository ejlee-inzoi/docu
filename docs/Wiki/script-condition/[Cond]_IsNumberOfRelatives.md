---
slug: "/Wiki/script-condition/Cond_IsNumberOfRelatives"
---

# [Cond]_IsNumberOfRelatives

Overview
==

* Checks the degree of kinship (chon) between Self and Target.  
* **Only blood relations are considered**.
  - Example: Comparing yourself to your husband's mother returns `false`.
  - Example: Although siblings are technically 2-chon, they are excluded and will return `false`.

Parameter
=========

| Params      | Description                                |
|-------------|--------------------------------------------|
| BaseObject  | The object to check the condition for       |
| Command     | IsNumberOfRelatives                        |
| CompareType | Type of comparison                         |
| F1          | Degree of kinship (chon) to compare (numeric) |

Examples
========

| Example Description                       | Command               | CompareType | S1 | S2 | F1 | F2 |
|-------------------------------------------|------------------------|-------------|----|----|----|----|
| If Self and Target are first-degree (1-chon) relatives | IsNumberOfRelatives   | Equal       |    |    | 1  |    |
| If Self and Target are second-degree (2-chon) relatives | IsFamilyRelationship  | Equal       |    |    | 2  |    |
