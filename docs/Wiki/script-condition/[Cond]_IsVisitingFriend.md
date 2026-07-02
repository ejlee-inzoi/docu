---
slug: "/Wiki/script-condition/Cond_IsVisitingFriend"
---

# [Cond]_IsVisitingFriend

Overview
==

* Checks whether the given character (`BaseObject`) is currently performing a "visiting" action (i.e., visiting someone else's lot).

Parameter
=========

| Params      | Description                                      |
|-------------|--------------------------------------------------|
| BaseObject  | The character to check (Self / Target)           |
| Command     | IsVisitingFriend                                 |
| CompareType | Comparison type (Equal / NotEqual)               |

Examples
========

| Example Description                                       | BaseObject | Command            | CompareType | S1 | S2 | F1 | F2 |
|-----------------------------------------------------------|------------|---------------------|-------------|----|----|----|----|
| If Self is currently visiting another character           | Self       | IsVisitingFriend    | Equal       |    |    |    |    |
| If Target is NOT currently visiting another character     | Target     | IsVisitingFriend    | NotEqual    |    |    |    |    |
