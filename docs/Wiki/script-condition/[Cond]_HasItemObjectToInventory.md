---
slug: "/Wiki/script-condition/Cond_HasItemObjectToInventory"
---

# [Cond]_HasItemObjectToInventory

Overview
==

* Checks whether the inventory contains a specified number of objects based on their exact Object ID.

Parameter
=========

| Parameter   | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | The object whose inventory will be checked                                  |
| Command     | HasItemObjectToInventory                                                    |
| S1          | Object ID to validate (from Object.json)                                    |
| F1          | Number of items to check for (must be 0 or higher; negative not allowed)    |
| CompareType | Comparison type (see below)                                                 |

Notes
=====

CompareType options:

- Equal → Number of owned items == F1  
- NotEqual → Number of owned items != F1  
- Greater → Number of owned items > F1  
- Less → Number of owned items < F1  
- GreaterOrEqual → Number of owned items ≥ F1  
- LessOrEqual → Number of owned items ≤ F1  

Examples
========

| Dialogue Text                                                  | [Condition] |                         |             |     |                  |
|----------------------------------------------------------------|-------------|-------------------------|-------------|-----|------------------|
| BaseObject                                                     | Command     | S1                      | F1          | CompareType       |
| Does Self’s inventory contain 2 or more of item ID ServedKsoup01? | Self        | HasItemObjectToInventory | ServedKsoup01 | 2   | GreaterOrEqual    |
