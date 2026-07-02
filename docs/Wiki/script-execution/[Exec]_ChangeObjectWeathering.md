---
slug: "/Wiki/script-execution/Exec_ChangeObjectWeathering"
---

# [Exec]_ChangeObjectWeathering

Overview
==

* Changes the weathering (wear and tear) level of a specified object.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The GameObject on which to execute the command |
| Command | ChangeObjectWeathering |
| F1 | ObjectWeathering Grade (integer)  
  * Index of the WeatheringInfos array defined in ObjectWeathering.json |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Change the target object's weathering level to index 0 | Target | ChangeObjectWeathering |  |  | 0 |  |  |
| Change the target object's weathering level to index 2 | Target | ChangeObjectWeathering |  |  | 2 |  |  |
