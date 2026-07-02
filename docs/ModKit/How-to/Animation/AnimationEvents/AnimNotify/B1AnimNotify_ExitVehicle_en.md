# B1AnimNotify_ExitVehicle

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_ExitVehicle.h / .cpp`
**Base Class:** `UAnimNotify`

> **Note:** Data extraction only — no runtime logic implemented yet (as of 240328).

## Purpose

Marker notify that flags the exact frame at which a character exits a vehicle. The vehicle system reads this notify to complete the disembarking transition.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `VehicleSeat` | `FName` | — | Seat identifier the character is leaving |

## Related

- `B1AnimNotify_EnterVehicle` — marks the boarding frame
- See `Tech:b1-vehicle` for the vehicle system architecture
