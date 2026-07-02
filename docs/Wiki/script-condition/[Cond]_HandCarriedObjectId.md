---
slug: "/Wiki/script-condition/Cond_HandCarriedObjectId"
---

# [Cond]_HandCarriedObjectId

Overview
==

* Condition command that compares the ID of the object currently held in the target's hand.

Parameters
==========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | Object to check the condition on         |
| Command     | HandCarriedObjectId                      |
| CompareType | Type of comparison                       |
| S1          | ObjectId to compare                      |

Examples
========

| Example                                                        | BaseObject | Command              | CompareType | S1       | S2 | F1 | F2 | Prob |
|----------------------------------------------------------------|------------|-----------------------|-------------|----------|----|----|----|------|
| If the object I’m currently holding has the ID "Guitar01"      | Self       | HandCarriedObjectId   | Equal       | Guitar01 |    |    |    |      |
| If the object I’m currently holding is not "Guitar01"          | Self       | HandCarriedObjectId   | NotEqual    | Guitar01 |    |    |    |      |
