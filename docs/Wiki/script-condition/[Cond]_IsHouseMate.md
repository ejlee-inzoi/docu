---
slug: "/Wiki/script-condition/Cond_IsHouseMate"
---

# [Cond]_IsHouseMate

Overview
==

* Checks whether the BaseObject and Target live in the same household.  
* Compares their `FamilyId` values.  
* Returns `false` if the TargetObject does not exist.

Parameter
=========

| Params       | Description                                               |
|--------------|-----------------------------------------------------------|
| BaseObject   | The object to check the condition for                     |
| Command      | IsHouseMate                                               |
| TargetObject | The object to compare against                             |
| CompareType  | Comparison operator                                       |

Examples
========

| Example Description           | BaseObject | Command      | CompareType | S1 | S2 | F1 | F2 |
|-------------------------------|------------|--------------|-------------|----|----|----|----|
| If the target lives in the same house      | Target     | IsHouseMate  | Equal      |    |    |    |    |
| If the target does NOT live in the same house | Target     | IsHouseMate  | NotEqual   |    |    |    |    |
