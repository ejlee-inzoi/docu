# B1AnimNotifyState_DisableLayeredBlend

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_DisableLayeredBlend.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Temporarily disables one or more layered blend channels (slot layer, right arm, left arm) for the duration of the notify range. Used in animations where IK or additive layers should not interfere with the base pose (e.g., a full-body pickup animation that shouldn't blend with upper-body idle IK).

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_DisableLayeredBlend`.
3. Configure which blend channels to disable in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `bDisableSlotLayer` | `bool` | true | Disables the entire slot layer (overrides the arm-specific options below) |
| `bDisableRightArm` | `bool` | false | Disables only the right arm layer — only editable when `bDisableSlotLayer` is false |
| `bDisableLeftArm` | `bool` | false | Disables only the left arm layer — only editable when `bDisableSlotLayer` is false |

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Builds `EB1LayeredBlendTarget` flags from checked properties, computes smoothing based on elapsed time since trigger, calls `animInstance->SetLayeredBlendDisabled(target, true, bApplySmoothing)` |
| `NotifyEnd` | Calls `animInstance->SetLayeredBlendDisabled(target, false)` to re-enable all disabled channels |

## Related

- Replaces the deprecated `UDEPRECATED_B1AnimNotify_PauseRightGrab`
