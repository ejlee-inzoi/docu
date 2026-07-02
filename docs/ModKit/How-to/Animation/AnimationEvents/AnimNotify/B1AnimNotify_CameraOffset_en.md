# B1AnimNotify_CameraOffset

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_CameraOffset.h / .cpp`
**Base Class:** `UAnimNotify`

## Purpose

Applies a camera position offset to the local player's shoulder-view camera at the notify frame.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_CameraOffset`.
3. Set `LocationOffset` in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `LocationOffset` | `FVector` | (0,0,0) | World-space offset applied to the shoulder camera position |

## Behavior

At the notify frame, calls `AB1Player::SetShoulderViewCameraOffset(LocationOffset)` on the owning pawn. Only executes for the locally controlled player — no effect on AI or remote characters.
