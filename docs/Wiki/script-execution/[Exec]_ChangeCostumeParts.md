---
slug: "/Wiki/script-execution/Exec_ChangeCostumeParts"
---

# [Exec]_ChangeCostumeParts

Overview
==

* Changes specific parts of the DefaultCostume stored in a B1Character.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The character on which to execute the command |
| Command | ChangeCostumeParts |
| S1 | Garment Type (Top, Bottom, Full, Shoes, Jacket, Hat, Socks, InnerTop, InnerUnder) |
| S2 | ID corresponding to the Garment Type  
  * The ID to apply to the DefaultCostume  
  * Leave blank or use `None` to remove the item  
  * Use `"Default"` to revert to the original outfit |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Change my character’s shoes to W_Shoes_SNK001 | Self | ChangeCostumeParts | Shoes | W_Shoes_SNK001 |  |  |  |
| Change my character’s jacket to W_Outer013_002 | Self | ChangeCostumeParts | Jacket | W_Outer013_002 |  |  |  |
| Remove my character’s jacket | Self | ChangeCostumeParts | Jacket | None |  |  |  |
| Revert my character’s jacket to default | Self | ChangeCostumeParts | Jacket | Default |  |  |  |
