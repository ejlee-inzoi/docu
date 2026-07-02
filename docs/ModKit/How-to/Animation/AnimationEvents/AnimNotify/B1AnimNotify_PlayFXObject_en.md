# B1AnimNotify_PlayFXObject

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_PlayFXObject.h / .cpp`
**Base Class:** `UAnimNotify`

## Purpose

Plays a one-shot FX Object (Niagara-based visual effect) at the notify frame.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_PlayFXObject`.
3. Assign `FXObject` in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `FXObject` | `TSubclassOf<UB1FXObject>` | — | The FX Object class containing the Niagara system and parameters to spawn |
| `IsPlayerOnlyEffect` | `bool` | false | If true, the effect is only spawned for the locally controlled player |

## Behavior

Calls `UB1FXManager::PlayFX(MeshComp, FXObject)`. In the editor preview (e.g., Persona), the Niagara system is spawned directly for immediate visual feedback without going through the manager.

## Related

- `B1AnimNotifyState_TimedFXObject` — state variant that sustains a looping FX for a duration
- `B1AnimNotify_PlayObjectSlotFX` — plays FX from a game object's slot configuration
