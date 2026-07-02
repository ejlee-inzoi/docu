---
slug: "/Wiki/script-condition/Cond_IsRelationshipFocusSelection"
---

# [Cond]_IsRelationshipFocusSelection

Overview
==

* Checks whether a specific relationship stat is currently set as the **focus** in the character's relationship status.

Parameter
=========

| Params      | Description                                  |
|-------------|----------------------------------------------|
| BaseObject  | The object to check the condition for         |
| Command     | IsRelationshipFocusSelection                 |
| CompareType | Type of comparison                           |
| S1          | Relationship stat ID to check (e.g., `friendship`, `romance`, `business`) |

Examples
========

| Example Description                                   | BaseObject | Command                        | CompareType | S1         | S2 | F1 | F2 |
|-------------------------------------------------------|------------|----------------------------------|-------------|------------|----|----|----|
| If friendship is currently the selected focus         | Self       | IsRelationshipFocusSelection    | Equal       | friendship |    |    |    |
| If romance is NOT the selected focus                  | Self       | IsRelationshipFocusSelection    | NotEqual    | romance    |    |    |    |
| If business is currently the selected focus           | Self       | IsRelationshipFocusSelection    | Equal       | business   |    |    |    |
