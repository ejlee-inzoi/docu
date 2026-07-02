---
slug: "/Wiki/script-condition/Cond_CanAddObjectTemplateToBag"
---

# [Cond]_CanAddObjectTemplateToBag

Overview
==

- Validates whether an item of a specified object template type (random) can be added to the inventory.

Parameters
==========

| Parameter   | Description |
|------------|-------------|
| BaseObject | Target object to check the condition |
| Command    | CanAddObjectTemplateToBag |
| S1         | ObjectTemplateId from Object.json of the item to add |
| F1         | Quantity of the item to add (minimum 1) |

Notes
=====

Conditions for adding an item to the inventory:

1. `S1` must be a valid ObjectTemplateId in `Object.json`  
   1. All items with the specified ObjectTemplateId must be valid in Object.json.
2. The object must possess an inventory (e.g., Joy, storage boxes)
3. There must be enough space available in the inventory

Examples
========

| Dialogue Text                         | BaseObject   | Command                  | S1                        | F1 |
|--------------------------------------|--------------|---------------------------|---------------------------|----|
| Can the item be added to the inventory? | Base/Target | CanAddObjectTemplateToBag | ServedFood08_v01_Template | 1  |
