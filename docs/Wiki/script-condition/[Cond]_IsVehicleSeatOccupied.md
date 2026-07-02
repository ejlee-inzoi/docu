---
slug: "/Wiki/script-condition/Cond_IsVehicleSeatOccupied"
---

# [Cond]_IsVehicleSeatOccupied

Overview
==

* Checks whether a specific seat in a vehicle is currently occupied by a character (Joy).
* If `BaseObject` is a character, the check is performed on the vehicle they are riding.
* If `BaseObject` is a vehicle, the check is performed directly on that vehicle.

Parameter
=========

| Params      | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | The object to check (character or vehicle)                                  |
| Command     | IsVehicleSeatOccupied                                                       |
| CompareType | Comparison type (Equal / NotEqual)                                          |
| S1          | Seat to check (from `EB1VehicleSeat`, e.g., Driver, Passenger0, Passenger1) |

Examples
========

| Example Description                                                                          | BaseObject | Command               | CompareType | S1         | S2 | F1 | F2 |
|----------------------------------------------------------------------------------------------|------------|------------------------|-------------|------------|----|----|----|
| If someone is sitting in the Passenger0 seat of the vehicle Self is riding                  | Self       | IsVehicleSeatOccupied  | Equal       | Passenger0 |    |    |    |
| If someone is sitting in the Passenger0 seat of the vehicle represented by Self             | Self       | IsVehicleSeatOccupied  | Equal       | Passenger0 |    |    |    |
| If the Driver seat of Self's vehicle is unoccupied                                           | Self       | IsVehicleSeatOccupied  | NotEqual    | Driver     |    |    |    |
