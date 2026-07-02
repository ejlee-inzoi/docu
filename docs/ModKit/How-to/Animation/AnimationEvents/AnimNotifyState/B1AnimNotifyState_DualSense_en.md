# B1AnimNotifyState_DualSense

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_DualSense.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Plays a DualSense (PS5 controller) haptic feedback preset for the full duration of the notify range, then stops it cleanly when the range ends or the montage is interrupted.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_DualSense`.
3. Set `PresetId` and drag the right edge to cover the desired haptic duration.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `PresetId` | `FName` | — | ID of the DualSense haptic preset from the data table |

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Calls `UB1DualSenseManager::PlayDualSense(PresetId)` — local player only |
| `NotifyEnd` | Calls `UB1DualSenseManager::StopDualSense(PresetId)` |

## Related

- `B1AnimNotify_DualSense` — single-frame trigger variant (no stop on interruption)
