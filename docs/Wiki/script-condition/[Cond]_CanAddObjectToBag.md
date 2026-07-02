---
slug: "/Wiki/script-condition/Cond_CanAddObjectToBag"
---

# [Cond]_CanAddObjectToBag

Overview
==

- Validates whether a specific item can be added to the inventory.

Parameters
==========

| Parameter   | Description |
|------------|-------------|
| BaseObject | Target object to check the condition |
| Command    | CanAddObjectToBag |
| S1         | ID from Object.json of the item to add |
| F1         | Quantity of the item to add (minimum 1) |

Notes
=====

Conditions for adding an item to the inventory:

1. `S1` must be an ID that exists in `Object.json`
2. The object must possess an inventory (e.g., Joy, storage boxes)
3. There must be enough space available in the inventory

Examples
========

| Dialogue Text                         | BaseObject   | Command           | S1             | F1 |
|--------------------------------------|--------------|-------------------|----------------|----|
| Can the item be added to the inventory? | Base/Target | CanAddObjectToBag | ServedKsoup01  | 1  |
