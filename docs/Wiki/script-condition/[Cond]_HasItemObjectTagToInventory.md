---
slug: "/Wiki/script-condition/Cond_HasItemObjectTagToInventory"
---

# [Cond]_HasItemObjectTagToInventory

Overview
==

* Checks whether the inventory contains a specified number of objects with a given ObjectTag.

Parameter
=========

| Parameter   | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | The object whose inventory will be checked                                  |
| Command     | HasItemObjectTagToInventory                                                 |
| S1          | ObjectTag to validate (defined in Object*.json or ObjectTemplate*.json)     |
| F1          | Number of items to check for (must be 0 or higher; negative values invalid) |
| CompareType | Type of comparison (see below)                                              |

Notes
=====

- CompareType: Equal → number of items == F1  
- CompareType: NotEqual → number of items != F1  
- CompareType: Greater → number of items > F1  
- CompareType: Less → number of items < F1  
- CompareType: GreaterOrEqual → number of items ≥ F1  
- CompareType: LessOrEqual → number of items ≤ F1  

Examples
========

| Dialogue Text                                                   | [Condition] |             |      |      |                |
|------------------------------------------------------------------|-------------|-------------|------|------|----------------|
| BaseObject                                                      | Command     | S1          | F1   | CompareType     |
| Does Self’s inventory contain 2 or more Giftable item objects? | Self        | HasItemObjectTagToInventory | Giftable | 2 | GreaterOrEqual |
