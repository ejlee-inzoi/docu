---
slug: "/Wiki/script-condition/Cond_IsSiteEventRole"
---

# [Cond]_IsSiteEventRole

Overview
==

* Checks whether the target character is currently assigned to a specific **role** in a site or social event.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | IsSiteEventRole                          |
| CompareType | Type of comparison                       |
| S1          | Role ID (RoleId) to check                |

Examples
========

| Example Description                                      | BaseObject | Command         | CompareType | S1            | S2 | F1 | F2 |
|----------------------------------------------------------|------------|------------------|-------------|---------------|----|----|----|
| If I am playing the "WeddingSpouse" role                 | Self       | IsSiteEventRole  | Equal       | WeddingSpouse |    |    |    |
| If the target is NOT playing the "WeddingGuest" role     | Target     | IsSiteEventRole  | NotEqual    | WeddingGuest  |    |    |    |
