---
slug: "/Wiki/script-execution/Exec_AddTransientDesireStat"
---

# [Exec]_AddTransientDesireStat

Overview
==

* A feature used to automatically alleviate a minimum level of need even when autonomous behavior is turned off.  
  + Allows temporary addition of a desire stat for a specific need.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | AddTransientDesireStat |
| S1 | Stat ID |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Automatically alleviate hunger | Self | AddTransientDesireStat | Hunger |  |  |  |  |

Available Stat IDs

| Id | Name |
| --- | --- |
| Hunger | Hunger |
| Cleanliness | Cleanliness |
| Sleep | Sleep |
| Toilet | Toilet |
| Fun | Fun |
| Society | Social |
| Admit | Recognition |
| Energy | Energy |
| Weathering | Clothing Weathering |
| Karma | Karma |
| CleanUp | Cleaning Instinct |
