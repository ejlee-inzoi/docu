---
slug: "/Wiki/script-condition/Cond_IsOwnedVehicle"
---

# [Cond]_IsOwnedVehicle

Overview
==

* Checks whether the `Self` (character) owns the `Target` (vehicle) stored in the ScriptContext.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | Irrelevant (can be Self or Target)       |
| Command     | IsOwnedVehicle                           |
| CompareType | Type of comparison                       |

Examples
========

| **Example**                                  | [Condition]     |             |             |
|----------------------------------------------|------------------|-------------|-------------|
| BaseObject                                   | Command          | CompareType |
| Does the interaction Self own the vehicle?   | Self/Target      | IsOwnedVehicle | Equal      |
