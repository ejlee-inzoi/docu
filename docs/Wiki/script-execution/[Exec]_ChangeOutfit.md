---
slug: "/Wiki/script-execution/Exec_ChangeOutfit"
---

# [Exec]_ChangeOutfit

Overview
==

* Changes the outfit to the one specified by the Costume ID from the given category.  
  + Costumes applied via the `ChangeOutfit` script can be removed later.  
  + Can also be removed using `Action_ChangeCostume`.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | ChangeOutfit |
| S1 | Costume ID (from Costume.json) |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Apply the "TakeOffShoes" outfit to myself | Self | ChangeOutfit | TakeOffShoes |  |  |  |  |
| Apply the "TakeOffShoes" outfit to the target | Target | ChangeOutfit | TakeOffShoes |  |  |  |  |
