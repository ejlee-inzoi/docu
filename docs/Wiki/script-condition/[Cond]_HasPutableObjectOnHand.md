---
slug: "/Wiki/script-condition/Cond_HasPutableObjectOnHand"
---

# [Cond]_HasPutableObjectOnHand

Overview
==

Checks whether the `BaseObject` can put the object currently held in their right hand into their inventory.

Parameter
=========

| Name         | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| `BaseObject` | The object to check the condition for                                       |
| `Command`    | `HasPutableObjectOnHand`                                                    |
| `CompareType`| Comparison operator: `Equal` = must be putable, `NotEqual` = must NOT be putable |
| `F1`         | Not used                                                                    |

Examples
========

| **Example**                                                    | BaseObject | Command              | CompareType | **S1** | **S2** | F1 | **F2** |
|----------------------------------------------------------------|------------|-----------------------|-------------|--------|--------|----|--------|
| Check if Self can put the object held in hand into inventory   | Self       | HasPutableObjectOnHand | Equal       |        |        | -  |        |
| Check if Self cannot put the object held in hand into inventory| Self       | HasPutableObjectOnHand | NotEqual    |        |        | -  |        |
| Check if Target cannot put the object held in hand into inventory| Target   | HasPutableObjectOnHand | NotEqual    |        |        |    |        |
