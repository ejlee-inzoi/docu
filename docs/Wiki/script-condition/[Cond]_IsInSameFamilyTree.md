---
slug: "/Wiki/script-condition/Cond_IsInSameFamilyTree"
---

# [Cond]_IsInSameFamilyTree

Overview
==

* Checks whether `Self` and `Target` belong to the same family tree (i.e., are related by blood).

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| Command     | IsInSameFamilyTree                       |
| CompareType | Comparison type (Equal / NotEqual)       |

Examples
========

| Example Description                               | BaseObject | Command              | CompareType | S1 | S2 | F1 | F2 | Prob |
|---------------------------------------------------|------------|-----------------------|-------------|----|----|----|----|-------|
| If Self and Target are blood relatives            | Self       | IsInSameFamilyTree    | Equal       |    |    |    |    |       |
| If Self and Target are NOT blood relatives        | Self       | IsInSameFamilyTree    | NotEqual    |    |    |    |    |       |
