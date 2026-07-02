# B1AnimNotify_PlayObjectSlotFX

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_PlayObjectSlotFX.h / .cpp`
**Base Class:** `UAnimNotify`

## Purpose

Plays the FX assigned to a named slot on a target game object. The FX asset and attachment position are defined in the game object's slot data, not in this notify.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_PlayObjectSlotFX`.
3. Set `Target` and `SlotName` in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `Target` | `EB1BaseObject` | `Target` | Which object to target: `Self` or `Target` (interaction target) |
| `SlotName` | `FName` | — | Name of the slot whose FX should be triggered |

## Behavior

Gets `UB1SlotComponent` from the resolved target actor and calls `TryPlayFx(SlotName)`. The FX asset, position, and parameters are all determined by the slot's configuration in the game object's data table.
