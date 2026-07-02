# B1AnimNotify_EnterVehicle

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_EnterVehicle.h / .cpp`
**Base Class:** `UAnimNotify`

> **Note:** Data extraction only — no runtime logic implemented yet (as of 240328).

## Purpose

Marker notify that flags the exact frame at which a character enters a vehicle seat. The vehicle system reads this notify to determine when to complete the boarding transition.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `VehicleSeat` | `FName` | — | Seat identifier within the vehicle |

## Related

- `B1AnimNotify_ExitVehicle` — marks the exit frame
- See `Tech:b1-vehicle` for the vehicle system architecture
