# B1AnimNotifyState_HideOriginMesh

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_AttachMesh.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Hides the character's original Skeletal Mesh component (or specified parts of it) while the notify range is active, then restores visibility when the range ends. Typically paired with `B1AnimNotifyState_AttachDetachMesh` to swap the visible mesh during a specific animation phase.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_HideOriginMesh`.
3. Set the duration to match the mesh-swap period.

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Sets the specified mesh component(s) visibility to hidden |
| `NotifyEnd` | Restores visibility |

## Related

- `B1AnimNotifyState_AttachDetachMesh` — often used together to show a replacement mesh while this hides the original
