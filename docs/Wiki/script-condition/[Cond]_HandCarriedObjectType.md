---
slug: "/Wiki/script-condition/Cond_HandCarriedObjectType"
---

# [Cond]_HandCarriedObjectType

Overview
==

* Condition command that compares the type of object currently held by the target.

Parameters
==========

| Params      | Description                                           |
|-------------|-------------------------------------------------------|
| BaseObject  | Object to check the condition on                      |
| Command     | HandCarriedObjectType                                 |
| CompareType | Type of comparison                                    |
| S1          | CarriedObjectType to compare (e.g., Object, Book, Food) |

Examples
========

| Example                                             | BaseObject | Command                | CompareType | S1   | S2 | F1 | F2 | Prob |
|-----------------------------------------------------|------------|-------------------------|-------------|------|----|----|----|------|
| If I am currently holding a book                    | Self       | HandCarriedObjectType   | Equal       | Book |    |    |    |      |
| If I am not currently holding a book                | Self       | HandCarriedObjectType   | NotEqual    | Book |    |    |    |      |
