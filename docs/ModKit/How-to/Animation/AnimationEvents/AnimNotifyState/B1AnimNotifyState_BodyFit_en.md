# B1AnimNotifyState_BodyFit

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_BodyFit.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Activates a bone IK constraint that makes a specific bone chain conform to a target socket position (e.g., hand gripping a handle, foot planting on a surface). Active for the duration of the notify range with smooth blend-in and blend-out.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_BodyFit`.
3. Drag the right edge to set the duration. Configure properties in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `ChainBone` | `EB1ChainBoneType` | `Invalid` | Bone chain to apply IK to (e.g., right hand, left hand, right foot) |
| `TargetSocket` | `FName` | — | Socket name on the scene that the bone chain should aim toward |
| `BlendIn` | `float` | 0.25 | Blend-in duration (normalized 0–1, clamped) |
| `BlendOut` | `float` | 0.25 | Blend-out duration (normalized 0–1, clamped) |
| `Weight` | `float` | 1.0 | Maximum IK weight at full blend (min: 0) |

## Console Variable

`b1.Anim.BodyFit 0` — disables BodyFit globally (useful for debugging IK issues).

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Gets `UB1BonePostProcessAnimInstance`, creates `FB1BodyFitData` from socket transform + chain config, calls `animInstance->StartBodyFitIK(ChainBone, data)` |
| `NotifyEnd` | Calls `animInstance->StopBodyFitIK(ChainBone, GetUniqueID())` to release the IK constraint |
