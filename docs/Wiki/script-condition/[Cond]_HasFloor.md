---
slug: "/Wiki/script-condition/Cond_HasFloor"
---

# [Cond]_HasFloor

Overview
==

* Checks whether there is a **room-based floor** at the BaseObject’s current position.  
  (Floors created by ceilings of lower levels are not detected.)  
* Only works within a lot; if used outside, it always returns as if there is no floor.

Parameter
=========

| Params      | Description                                |
|-------------|--------------------------------------------|
| BaseObject  | The object to check the condition for      |
| Command     | HasFloor                                   |
| CompareType | Type of comparison (Equal / NotEqual only) |
| S1          |                                            |

Examples
========

| Example                                                                 | BaseObject | Command   | CompareType | S1 | S2 | F1 | F2 |
|-------------------------------------------------------------------------|------------|-----------|-------------|----|----|----|----|
| If there is a room-based floor at the Self character’s position         | Self       | HasFloor  | Equal       |    |    |    |    |
| If there is no room-based floor at the Target’s position                | Target     | HasFloor  | NotEqual    |    |    |    |    |
