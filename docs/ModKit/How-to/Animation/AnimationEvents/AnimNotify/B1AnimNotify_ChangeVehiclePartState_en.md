# B1AnimNotify_ChangeVehiclePartState

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_ChangeVehiclePartState.h / .cpp`
**Base Class:** `UAnimNotify`

> **Note:** Implementation body is empty — data extraction only as of the current version.

## Purpose

Changes the visual state of a vehicle part (e.g., open/close a door) at the notify frame.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `PartType` | `EB1VehiclePartType` | `Invalid` | Which vehicle part to affect |
| `PartState` | `FName` | — | New state name to apply to that part |

## Related

- See also `Tech:b1-vehicle` for the vehicle system architecture.
