---
slug: "/Wiki/script-condition/Cond_OwnedVehicleSpawned"
---

# [Cond]_OwnedVehicleSpawned

Overview
==

* Checks whether the `BaseObject` owns a vehicle that is currently **spawned** (i.e. present in the world).

Parameter
=========

| **Params**   | **Description**                              |
|--------------|-----------------------------------------------|
| BaseObject   | The object to check (typically Self/Target)   |
| Command      | OwnedVehicleSpawned                           |
| CompareType  | Comparison type (Equal / NotEqual)            |

Examples
========

| **Example Description**                                 | **BaseObject** | **Command**          | **CompareType** | **S1** | **S2** | **F1** | **F2** |
|----------------------------------------------------------|----------------|-----------------------|------------------|--------|--------|--------|--------|
| If I currently own a spawned vehicle                     | Self           | OwnedVehicleSpawned   | Equal            |        |        |        |        |
| If the target does NOT currently own a spawned vehicle   | Target         | OwnedVehicleSpawned   | NotEqual         |        |        |        |        |
