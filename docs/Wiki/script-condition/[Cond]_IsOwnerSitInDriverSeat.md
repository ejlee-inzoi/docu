---
slug: "/Wiki/script-condition/Cond_IsOwnerSitInDriverSeat"
---

# [Cond]_IsOwnerSitInDriverSeat

Overview
==

* Checks whether the owner of a vehicle is currently seated in the driver's seat.

Parameter
=========

| **Params**   | **Description**                            |
|--------------|---------------------------------------------|
| BaseObject   | The object to check the condition for       |
| Command      | IsOwnerSitInDriverSeat                      |
| CompareType  | Comparison type (Equal / NotEqual)          |

Examples
========

| **Example**                                      | **BaseObject** | **Command**             | **CompareType** | **S1** | **S2** | **F1** | **F2** |
|--------------------------------------------------|----------------|--------------------------|------------------|--------|--------|--------|--------|
| If I am seated in the driver’s seat of my own vehicle | Self           | IsOwnerSitInDriverSeat   | Equal            |        |        |        |        |
| If the target is NOT seated in the driver’s seat of their own vehicle | Target         | IsOwnerSitInDriverSeat   | NotEqual         |        |        |        |        |
