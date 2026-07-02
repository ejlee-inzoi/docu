# B1AnimNotify_DualSense

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_DualSense.h / .cpp`
**Base Class:** `UAnimNotify`

## Purpose

Fires a DualSense (PS5 controller) haptic feedback preset once at the notify frame.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_DualSense`.
3. Set `PresetId` to the desired haptic preset ID in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `PresetId` | `FName` | — | ID of the DualSense haptic preset defined in the DualSense data table |

## Behavior

Calls `UB1DualSenseManager::PlayDualSense(PresetId)` only when the owning pawn is locally controlled. Has no effect on AI characters or remote players.

## Related

- `B1AnimNotifyState_DualSense` — state variant that sustains haptic feedback for a duration and stops it cleanly on end
