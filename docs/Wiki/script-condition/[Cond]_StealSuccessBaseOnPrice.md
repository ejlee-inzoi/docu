---
slug: "/Wiki/script-condition/Cond_StealSuccessBaseOnPrice"
---

# [Cond]_StealSuccessBaseOnPrice

Overview
==

* A condition that determines whether an object can be stolen based on its price.
* If the object's price exceeds the value calculated by F1, the steal success rate increases linearly between F1 and F2.  
  (At F1, the chance is 0%; at F2, the chance is 100%)

* Example  
  + If the object's base price is 100, and F1 = 1.8, F2 = 2.0  
  + The chance to steal becomes valid when the sale price exceeds 180,  
    and becomes 100% when it reaches 200.

Parameter
=========

| Parameter | Description |
| --- | --- |
| BaseObject | The object to check the condition against |
| Command | StealSuccessBaseOnPrice |
| F1 | Minimum ratio threshold for steal chance |
| F2 | Maximum ratio threshold for steal chance |

Example
==

|  | BaseObject | Command | CompareType | F1 | F2 |
| --- | --- | --- | --- | --- | --- |
| Can I steal the target? | Self | StealSuccessBaseOnPrice | Equal | 1.8 | 2.0 |
