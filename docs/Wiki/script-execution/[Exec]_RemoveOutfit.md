---
slug: "/Wiki/script-execution/Exec_RemoveOutfit"
---

# [Exec]_RemoveOutfit

Overview
==

* RemoveOutfit: Removes the outfit corresponding to the CostumeId specified by category  
  + Can remove outfits changed via ChangeOutfit script  
  + Can remove outfits changed via Action_ChangeCostume

Details
==

| Parameter   | Description                     |
|-------------|---------------------------------|
| BaseObject  | Object to execute the command   |
| Command     | RemoveOutfit                    |
| S1          | Costume Id                      |

Examples
==

| Example                                                  | BaseObject | Command       | S1                         | S2 | F1 | F2 |
|----------------------------------------------------------|------------|---------------|----------------------------|----|----|----|
| Remove the headset custom outfit                         | Self       | RemoveOutfit  | Costume_Trending_HeadSet   |    |    |    |
| Remove the TakeOffShoes applied to my appearance         | Self       | RemoveOutfit  | TakeOffShoes               |    |    |    |
