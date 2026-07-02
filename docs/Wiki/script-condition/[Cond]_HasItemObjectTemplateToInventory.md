---
slug: "/Wiki/script-condition/Cond_HasItemObjectTemplateToInventory"
---

# [Cond]_HasItemObjectTemplateToInventory

Overview
==

* Checks whether the inventory contains a specified number of objects that belong to a given ObjectTemplate.

Parameter
=========

| Parameter   | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | The object whose inventory will be checked                                  |
| Command     | HasItemObjectTemplateToInventory                                            |
| S1          | ObjectTemplateId from Object.json                                           |
| F1          | Number of items to check for (must be 0 or higher; negative not allowed)    |
| CompareType | Comparison type (see below)                                                 |

Notes
=====

CompareType options:

- Equal → Number of template-matched items == F1  
- NotEqual → Number of template-matched items != F1  
- Greater → Number of template-matched items > F1  
- Less → Number of template-matched items < F1  
- GreaterOrEqual → Number of template-matched items ≥ F1  
- LessOrEqual → Number of template-matched items ≤ F1  

Example: `ServedFood04_Template`

- ServedRamen01 (Ramen)  
- ServedDumpling01 (Dumpling)  

Trying to remove 3 items of `ServedFood04_Template`  
→ If only 2 (Ramen + Dumpling) exist in inventory, condition returns **false**

Examples
========

| Dialogue Text                                                              | [Condition] |                         |                             |      |                  |
|----------------------------------------------------------------------------|-------------|-------------------------|-----------------------------|------|------------------|
| BaseObject                                                                 | Command     | S1                      | F1                          | CompareType         |
| Does Self’s inventory contain 2 or more items of the given object template? | Self        | HasItemObjectTemplateToInventory | ServedFood04_Template | 2    | GreaterOrEqual    |
