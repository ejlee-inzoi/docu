---
slug: "/Wiki/script-condition/Cond_IsWaitingForPassenger"
---

# [Cond]_IsWaitingForPassenger

Overview
==

* Checks if a specified vehicle seat (given by `S1`) is **reserved but not yet occupied** by a character.  
* If `S1` is invalid or not provided, the condition checks **all seats** to see if any are waiting for a passenger.

Parameter
=========

| Params      | Description                                                                                 |
|-------------|---------------------------------------------------------------------------------------------|
| BaseObject  | Vehicle entity to check. If a character is given, it uses the vehicle the character is in. |
| Command     | IsWaitingForPassenger                                                                       |
| CompareType | Type of comparison                                                                          |
| S1          | Vehicle seat to check (see `EB1VehicleSeat`)                                                |

EB1VehicleSeat
==============

| **Type**     | **Description**     |
|--------------|---------------------|
| Driver       | Driver seat         |
| Passenger0   | Passenger seat 0    |
| Passenger1   | Passenger seat 1    |
| Passenger2   | Passenger seat 2    |

Examples
========

| **Example**                                                      | [Condition] |         |         |         |
|------------------------------------------------------------------|-------------|---------|---------|---------|
| BaseObject                                                       | Command     | CompareType | S1     |
| Is the Driver seat on Target vehicle reserved but not occupied? | Target      | IsWaitingForPassenger | NotEqual | Driver |
