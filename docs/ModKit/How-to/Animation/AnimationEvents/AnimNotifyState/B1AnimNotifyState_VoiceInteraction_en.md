# B1AnimNotifyState_VoiceInteraction

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_Voice.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Plays a voice line (resolved from a named voice resource) during an interaction animation. Supports async audio asset loading with a configurable delay. The voice clip is stopped cleanly when the notify range ends or the montage is interrupted.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_VoiceInteraction`.
3. Set `VoiceResourceId` in the **Details panel** and drag the bar to cover the voice clip duration.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `VoiceResourceId` | `FName` | — | ID of the voice resource defined in the character's voice data asset |

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Calls `AB1Character::GetVoiceResource(VoiceResourceId)` to resolve the audio asset. Creates a `FB1NotifyStateVoiceKey` (contains mesh, animation, timing, montage instance info). Spawns the sound attached to the head socket via `UB1AudioManager::SpawnSoundAttached()`. Supports async loading with configurable delay (console variable). |
| `NotifyEnd` | Stops the audio component and removes the entry from the internal map |

## Async Loading

If the voice audio asset is not yet loaded when `NotifyBegin` fires, the sound spawn is deferred by a configurable number of frames (controlled via a console variable). This prevents hitches in streaming scenarios.

## Related

- `B1AnimNotifyState_VoiceTalk` — voice during Talk animations (coop voice source)
- `B1AnimNotifyState_VoiceIdle` — voice during idle animations
- `B1AnimNotifyState_VoiceDream` — voice during dream sequence animations
