---
slug: "/Wiki/script-condition/Cond_NearestCityGraphPointDistance"
---

# [Cond]_NearestCityGraphPointDistance

Overview
==

* Checks whether there is a **CityGraph Point** within a given distance (F1, in meters) from the `BaseObject`.  
* Uses `<=` comparison to determine proximity.

Parameter
=========

| **Params**   | **Description**                                |
|--------------|-------------------------------------------------|
| BaseObject   | The object to check (e.g., Self or Target)      |
| Command      | NearestCityGraphPointDistance                  |
| CompareType  | -            |
| F1           | Distance threshold in meters                    |

Examples
========

| **Example Description**                                         | **BaseObject** | **Command**                  | **CompareType** | **S1** | **S2** | **F1** | **F2** |
|------------------------------------------------------------------|----------------|-------------------------------|------------------|--------|--------|--------|--------|
| If a CityGraph Point exists within 30 meters of my position     | Self           | NearestCityGraphPointDistance |                  |        |        | 30     |        |
| If a CityGraph Point exists within 20 meters of the target      | Target         | NearestCityGraphPointDistance |                  |        |        | 20     |        |
