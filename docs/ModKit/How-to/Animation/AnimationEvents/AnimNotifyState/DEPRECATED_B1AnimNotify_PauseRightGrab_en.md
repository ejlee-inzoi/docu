# DEPRECATED_B1AnimNotify_PauseRightGrab *(Deprecated)*

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_PauseRightGrab.h / .cpp`
**Class Name:** `UDEPRECATED_B1AnimNotify_PauseRightGrab`
**Base Class:** `UAnimNotifyState`

> **Deprecated.** Use `B1AnimNotifyState_DisableLayeredBlend` instead.

## Purpose

Temporarily disables the global layered blend (used for right-hand grab IK overrides) for the duration of the notify range. Replaced by the more flexible `B1AnimNotifyState_DisableLayeredBlend`.

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Gets `UB1CharacterAnimInstance`, calls `animInstance->SetLayeredBlendDisabled(EB1LayeredBlendTarget::Global, true, ...)` |
| `NotifyEnd` | Calls `animInstance->SetLayeredBlendDisabled(EB1LayeredBlendTarget::Global, false)` |

## Migration

Replace with `B1AnimNotifyState_DisableLayeredBlend` and set `bDisableSlotLayer = true`.
