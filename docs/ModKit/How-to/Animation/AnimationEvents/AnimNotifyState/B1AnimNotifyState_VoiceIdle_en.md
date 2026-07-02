# B1AnimNotifyState_VoiceIdle

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_Voice.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Plays a voice line during an idle animation. Similar to `VoiceInteraction` but used in non-interaction contexts (ambient idle vocalizations, etc.).

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_VoiceIdle`.
3. Set `VoiceResourceId` in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `VoiceResourceId` | `FName` | — | ID of the idle voice resource in the character's voice data |

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Resolves voice resource via `AB1Character::GetVoiceResource(VoiceResourceId)`, spawns sound attached to the character via `UB1AudioManager::SpawnSoundAttached()` |
| `NotifyEnd` | Stops the audio component |

## Related

- `B1AnimNotifyState_VoiceInteraction` — voice during interaction animations
- `B1AnimNotifyState_VoiceTalk` — voice during Talk animations
- `B1AnimNotifyState_VoiceDream` — voice during dream sequence animations
