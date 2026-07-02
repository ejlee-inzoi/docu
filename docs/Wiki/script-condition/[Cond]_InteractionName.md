---
slug: "/Wiki/script-condition/Cond_InteractionName"
---

# [Cond]_InteractionName

Overview
==

* Condition command that checks the current ongoing interaction by its ID.

Parameter
=========

| Params      | Description                                                           |
|-------------|-----------------------------------------------------------------------|
| BaseObject  | The object to check the condition for                                 |
| Command     | InteractionName                                                       |
| CompareType | Type of comparison                                                    |
| S1          | Interaction ID to compare (checks if the target is performing it now) |

Examples
========

| Example Description                                                                  | BaseObject | Command          | CompareType | S1                         | S2 | F1 | F2 |
|--------------------------------------------------------------------------------------|------------|-------------------|-------------|----------------------------|----|----|----|
| If I am currently doing the "Book_PickUp_Sit_Read" interaction                       | Self       | InteractionName   | Equal       | Book_PickUp_Sit_Read       |    |    |    |
| If I am NOT currently doing the "Book_PickUp_Sit_Read" interaction                   | Self       | InteractionName   | NotEqual    | Book_PickUp_Sit_Read       |    |    |    |
