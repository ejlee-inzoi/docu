---
slug: "/Wiki/script-condition/Cond_HasFloorByImpactPoint"
---

# [Cond]_HasFloorByImpactPoint

Overview
==

* Condition to check whether there is a **room-based floor** at a specific position.  
  (If the position is not part of a room, it does not detect floors created by ceilings below.)  
* Only works when the position is within a lot; always returns false for outside areas.

Parameter
=========

| Params      | Description                                |
|-------------|--------------------------------------------|
| BaseObject  | Object to check the condition for (unused) |
| Command     | HasFloorByImpactPoint                      |
| CompareType | Type of comparison (Equal / NotEqual only) |
| S1          |                                            |

Examples
========

| Example                                                         | BaseObject    | Command                 | CompareType | S1 | S2 | F1 | F2 |
|-----------------------------------------------------------------|---------------|--------------------------|-------------|----|----|----|----|
| If there is a room-based floor at the specified location        | Self (unused) | HasFloorByImpactPoint    | Equal       |    |    |    |    |
| If there is no room-based floor at the specified location       | Self (unused) | HasFloorByImpactPoint    | NotEqual    |    |    |    |    |
