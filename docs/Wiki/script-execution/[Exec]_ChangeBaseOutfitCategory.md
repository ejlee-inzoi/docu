---
slug: "/Wiki/script-execution/Exec_ChangeBaseOutfitCategory"
---

# [Exec]_ChangeBaseOutfitCategory

Overview
==

Changes the character’s BaseOutfit to the specified OutfitCategory.

* Typically, the outfit is changed to **Summer** or **Winter** depending on the weather (temperature), and defaults to **Everyday** otherwise.

Available OutfitCategories:  
Everyday, Formal, School, Sleep, Party, Sports, Swimwear, Summer, Winter

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | ChangeBaseOutfitCategory |
| S1 | OutfitCategory |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Change BaseOutfit to Winter outfit category | Self | ChangeBaseOutfitCategory | Winter |  |  |  |  |
| Change BaseOutfit to Summer outfit category | Self | ChangeBaseOutfitCategory | Summer |  |  |  |  |
| Change BaseOutfit to Everyday outfit category | Self | ChangeBaseOutfitCategory | Everyday |  |  |  |  |
