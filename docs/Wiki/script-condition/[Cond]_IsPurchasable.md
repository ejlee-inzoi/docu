---
slug: "/Wiki/script-condition/Cond_IsPurchasable"
---

# [Cond]_IsPurchasable

Overview
==

* Checks whether the target object is **purchasable**, based on sales permissions (i.e., if the player has the right to buy the item).

Parameter
=========

| **Parameter** | **Description**                                |
|---------------|------------------------------------------------|
| BaseObject    | The object to check the condition for          |
| Command       | IsPurchasable                                  |
| CompareType   | Comparison type (Equal / NotEqual)             |

Examples
========

| **Dialogue Text**           | **[Condition] (8 types)** |         |         |         |     |
|-----------------------------|----------------------------|---------|---------|---------|-----|
| **BaseObject**              | **Command**                | **CompareType** | **S1** | **S2** |
| Can the target be purchased?| Target                     | IsPurchasable   | Equal  |        | 
