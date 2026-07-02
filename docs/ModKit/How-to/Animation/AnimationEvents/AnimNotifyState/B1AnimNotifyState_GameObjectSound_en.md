# B1AnimNotifyState_GameObjectSound

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_GameObjectSound.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Plays a named sound on a game object for the duration of the notify range, then stops it when the range ends or the montage is interrupted.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_GameObjectSound`.
3. Configure properties in the **Details panel** and drag the right edge to set the sound duration.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `GameObjectStateType` | `EB1GameObjectStateType` | `Target` | Which object to play sound on: `Target`, `Grab`, or `Self` |
| `ObjectSoundId` | `FName` | — | Sound preset ID from the GameObjectSound data table |
| `SocketType` | `EB1GameObjectAttachSocketType` | `Invalid` | Socket category to attach audio to |
| `SocketName` | `FName` | — | Explicit socket name override |

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Calls `AddObjectSound()` on the game object's audio component to start the sound |
| `NotifyEnd` | Calls `RemoveObjectSound()` to stop it |

## Related

- `B1AnimNotify_GameObjectSound` — single-frame variant (supports OneShot, UniqueOncePlay, Stop commands)
