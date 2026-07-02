---
slug: "/Wiki/script-execution/Exec_RemoveOutfitCategory"
---

# [Exec]_RemoveOutfitCategory

Overview
==

* RemoveOutfitCategory: Removes outfits assigned to a specific category  
  + Can remove outfits applied via ChangeOutfitCategory script  
  + Can remove outfits applied via [Action_ChangeOutfitCategory](https://krafton.atlassian.net/wiki/spaces/ProjectBLUE/pages/181144391/Action_ChangeOutfitCategory)

OutfitCategory options: Everyday, Formal, School, Sleep, Party, Sports, Swimwear, Summer, Winter

Details
==

| Parameter   | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | Object to execute the command                                               |
| Command     | RemoveOutfitCategory                                                        |
| S1          | OutfitCategory value  * Use MAX to remove all outfits applied via script/action |

Examples
==

| Example                                                  | BaseObject | Command              | S1    | S2 | F1 | F2 | Prob |
|----------------------------------------------------------|------------|----------------------|-------|----|----|----|------|
| Remove party outfit applied via ChangeOutfitCategory     | Self       | RemoveOutfitCategory | Party |    |    |    |      |
| Remove all outfit categories applied via script/action   | Self       | RemoveOutfitCategory | MAX   |    |    |    |      |
