---
slug: "/Wiki/script-condition/Cond_HasOutfitGarmentType"
---

# [Cond]_HasOutfitGarmentType

Overview
==

* Checks whether the target is currently wearing a specific GarmentType.

Parameter
=========

| Params      | Description                                          |
|-------------|------------------------------------------------------|
| BaseObject  | The object to check the condition for               |
| Command     | HasOutfitGarmentType                                |
| CompareType | Type of comparison (Equal / NotEqual)               |
| S1          | GarmentType to check:<br>Top, Bottom, Full, Shoes, Jacket, Hat, Socks, InnerTop, InnerUnder, Necklace, Nail, Bracelet, Ring, Stockings |

Examples
========

| Example Description                                        | BaseObject | Command               | CompareType | S1     | S2 | F1 | F2 |
|------------------------------------------------------------|------------|------------------------|-------------|--------|----|----|----|
| If I am currently wearing pants                            | Self       | HasOutfitGarmentType  | Equal       | Bottom |    |    |    |
| If I am currently wearing a full-body outfit (e.g., dress) | Self       | HasOutfitGarmentType  | Equal       | Full   |    |    |    |
| If I am NOT currently wearing pants                        | Self       | HasOutfitGarmentType  | NotEqual    | Bottom |    |    |    |
