---
slug: "/Wiki/script-condition/Cond_IsMatchingRomanceTarget"
---

# [Cond]_IsMatchingRomanceTarget

Overview
==

* Checks whether both parties (Self and Target) match each other's "preferred romantic target" conditions.

Notes:
- Currently, the condition checks whether **both** sides match each other's preferences.
- Final clarification may be needed to decide if this should check **mutual compatibility** or only whether the **Target's** preference includes Self.

Parameter
=========

| Params      | Description                                               |
|-------------|-----------------------------------------------------------|
| BaseObject  | The object to check the condition for (usually Target)   |
| Command     | IsMatchingRomanceTarget                                   |
| CompareType | Type of comparison                                        |
| S1          | True / False — whether mutual preference match is expected |

Examples
========

| Example Description                                                                 | BaseObject | Command                 | CompareType | S1    | S2 | F1 | F2 |
|-------------------------------------------------------------------------------------|------------|--------------------------|-------------|-------|----|----|----|
| If both my and the target’s preferred romantic conditions match each other         | Target     | IsMatchingRomanceTarget  | Equal       | True  |    |    |    |
| If either I or the target does NOT meet each other’s romantic preference condition | Target     | IsMatchingRomanceTarget  | Equal       | False |    |    |    |
