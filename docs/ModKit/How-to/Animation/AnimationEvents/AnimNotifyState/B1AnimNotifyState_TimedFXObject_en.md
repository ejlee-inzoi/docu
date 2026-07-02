# B1AnimNotifyState_TimedFXObject

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_TimedFXObject.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Plays a looping or timed FX Object (Niagara-based visual effect) for the duration of the notify range, then cleanly stops and destroys it when the range ends or the montage is interrupted. Uses an int64 handle stored on the game object to ensure deterministic cleanup.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_TimedFXObject`.
3. Assign `FXObject` and set the duration in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `FXObject` | `TSubclassOf<UB1FXObject>` | — | The FX Object class containing the Niagara system and parameters |

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Gets `UB1FXManager` via `UB1System::GetManager<UB1FXManager>()`, calls `PlayFXWithHandle(MeshComp, FXObject)` to get an `int64` handle, stores it via `ownerGameObject->AddFXHandle(fxKey, handle)` or `animInstance->AddFXHandle()` |
| `NotifyEnd` | Calls `ownerGameObject->DestroyFX(fxKey)` or `animInstance->DestroyFX(fxKey)` using the stored handle |

> In editor preview mode (Persona), the Niagara system is spawned directly for immediate visual feedback without going through the manager.

## Handle Key

The `fxKey` is derived from the notify's `GetUniqueID()`, making it safe to have multiple instances of the same notify active simultaneously on different characters.

## Related

- `B1AnimNotify_PlayFXObject` — single-frame one-shot variant
