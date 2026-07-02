---
slug: "/Wiki/script-condition/Cond_OutfitGarmentTag"
---

# [Cond]_OutfitGarmentTag

Overview
==

* Checks whether **any currently worn garment** includes the specified tag.  
* Applicable clothing categories: Outerwear, Top, Bottom, and Full-body dress.

Tag Matching Sources:
1. `OutfitCategoryTags` in `Garment{}.json`
2. `Tags` in `Garment{}Mesh.json`  
→ If the tag in `S1` is found in either location, the condition returns `true`.

Parameter
=========

|         | Description                                  |
|---------|----------------------------------------------|
| BaseObject  | The object to evaluate (usually Self)     |
| Command     | OutfitGarmentTag                         |
| CompareType | Comparison type (Equal / NotEqual)       |
| S1          | Tag (FName) to check (e.g., `Winter`)     |

Examples
========

| Example Description                                                  | BaseObject | Command           | CompareType | S1     | S2 | F1 | F2 |
|----------------------------------------------------------------------|------------|--------------------|-------------|--------|----|----|----|
| If I am currently wearing at least one item tagged with "Winter"    | Self       | OutfitGarmentTag   | Equal       | Winter |    |    |    |
| If I am currently wearing at least one item tagged with "Summer"    | Self       | OutfitGarmentTag   | Equal       | Summer |    |    |    |
