# B1AnimNotifyState_CharacterPlayAudio

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_CharacterPlayAudio.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Plays a specific audio clip (identified by `SoundNotifyId`) from a GameObjectSound preset for the duration of the notify range, then stops it cleanly on end.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_CharacterPlayAudio`.
3. Set `GameObjectSoundId` and `SoundNotifyId` in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `GameObjectSoundId` | `FName` | — | ID used to look up the `FB1GameObjectSoundTableRow` data record |
| `SoundNotifyId` | `FName` | — | Identifies which specific `UMetaSoundSource` within the sound preset to play |
| `SocketType` | `EB1GameObjectAttachSocketType` | `Invalid` | Socket category to attach the audio component to |

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Looks up `FB1GameObjectSoundTableRow` by `GameObjectSoundId`, finds the `UMetaSoundSource` matching `SoundNotifyId`, spawns it attached to the resolved socket via `UB1AudioManager::SpawnSoundAttached()` |
| `NotifyEnd` | Stops the audio via `UB1AudioManager::StopSound2D()` |
