# B1AnimNotifyState_VoiceTalk

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_Voice.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Plays a co-op voice line during a Talk animation. The voice resource is resolved dynamically from the character's coop voice configuration rather than from a fixed ID.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_VoiceTalk`.
3. Set `VoiceSourceType` in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `VoiceSourceType` | `EB1TalkVoiceSourceType` | — | Determines which coop voice resource slot to use for this Talk voice line |

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Calls `AB1Character::GetCoopVoiceResourceId()` to resolve the voice resource ID, then spawns the sound attached to the character via `UB1AudioManager::SpawnSoundAttached()` |
| `NotifyEnd` | Stops the audio component |

## Related

- `B1AnimNotifyState_VoiceInteraction` — voice during interaction animations (fixed resource ID)
- `B1AnimNotifyState_VoiceIdle` — voice during idle animations
- `B1AnimNotifyState_VoiceDream` — voice during dream sequence animations
