# B1AnimNotify_GameObjectSound

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_GameObjectSound.h / .cpp`
**Base Class:** `UAnimNotify`

## Purpose

Plays, loops, or stops a named sound on a game object (interaction target, grab target, or self) at the notify frame.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_GameObjectSound`.
3. Configure the properties below in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `GameObjectStateType` | `EB1GameObjectStateType` | `Target` | Which object to play sound on: `Target`, `Grab`, or `Self` |
| `ObjectSoundId` | `FName` | — | Sound preset ID from the GameObjectSound data table |
| `CommandType` | `EB1GameObjectSoundCommandType` | `OneShot` | `OneShot`, `UniqueOncePlay`, or `Stop` |
| `SocketType` | `EB1GameObjectAttachSocketType` | `Invalid` | Socket category to attach audio to |
| `SocketName` | `FName` | — | Explicit socket name override |

## Behavior

Resolves the target game object based on `GameObjectStateType`, then executes the sound command:

- **`OneShot`** — spawns a one-shot sound attached to the game object.
- **`UniqueOncePlay`** — plays only if the sound is not already playing on the object (`HasObjectSound` check).
- **`Stop`** — stops the currently playing sound matching `ObjectSoundId` on the object.

Sound lifecycle is managed via `AddObjectSound()` / `RemoveObjectSound()` / `HasObjectSound()` on the game object's audio component.

## Related

- `B1AnimNotifyState_GameObjectSound` — state variant that plays for a duration
