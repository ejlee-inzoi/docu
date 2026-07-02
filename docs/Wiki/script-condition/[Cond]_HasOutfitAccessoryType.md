---
slug: "/Wiki/script-condition/Cond_HasOutfitAccessoryType"
---

# [Cond]_HasOutfitAccessoryType

Overview
==

* Checks whether the target is currently wearing a specific type of accessory.

Parameter
=========

| Params      | Description                                           |
|-------------|-------------------------------------------------------|
| BaseObject  | The object to check the condition for                |
| Command     | HasOutfitAccessoryType                               |
| CompareType | Type of comparison (Equal / NotEqual)                |
| S1          | AccessoryType (Glasses, Earring, HairAccessory, Piercing) |

Examples
========

| Example Description                                  | BaseObject | Command                 | CompareType | S1         | S2 | F1 | F2 |
|------------------------------------------------------|------------|--------------------------|-------------|------------|----|----|----|
| If I am currently wearing glasses                    | Self       | HasOutfitAccessoryType   | Equal       | Glasses    |    |    |    |
| If I am currently wearing a piercing                 | Self       | HasOutfitAccessoryType   | Equal       | Piercing   |    |    |    |
| If I am NOT currently wearing glasses                | Self       | HasOutfitAccessoryType   | NotEqual    | Glasses    |    |    |    |
