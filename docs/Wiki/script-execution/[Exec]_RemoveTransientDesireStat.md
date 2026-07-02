---
slug: "/Wiki/script-execution/Exec_RemoveTransientDesireStat"
---

# [Exec]_RemoveTransientDesireStat

Overview
==

* Used to remove temporary desires added via AddTransientDesireStat, allowing minimal automatic need resolution even when autonomous behavior is off.

Details
==

| Parameter   | Description                     |
|-------------|---------------------------------|
| BaseObject  | Object to execute the command   |
| Command     | RemoveTransientDesireStat       |
| S1          | Stat Id                         |

Examples
==

| Example                                         | BaseObject | Command                   | S1     | S2 | F1 | F2 | Prob |
|-------------------------------------------------|------------|----------------------------|--------|----|----|----|------|
| Remove automatic hunger resolution              | Self       | RemoveTransientDesireStat | Hunger |    |    |    |      |

Stat ID List

| Id          | Name             |
|-------------|------------------|
| Hunger      | Hunger           |
| Cleanliness | Cleanliness      |
| Sleep       | Sleep            |
| Toilet      | Toilet           |
| Fun         | Fun              |
| Society     | Social           |
| Admit       | Approval         |
| Energy      | Energy           |
| Weathering  | Outfit Weathering|
| Karma       | Karma            |
| CleanUp     | Cleanup Instinct |
