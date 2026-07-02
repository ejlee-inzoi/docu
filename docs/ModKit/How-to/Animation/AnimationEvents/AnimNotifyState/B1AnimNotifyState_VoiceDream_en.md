# B1AnimNotifyState_VoiceDream

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_Voice.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Plays a voice line during a dream sequence animation. The voice resource is resolved dynamically from the character's `UB1DreamComponent` rather than from a fixed ID, allowing each dream scenario to supply its own voice clip.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence** used in a dream sequence.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_VoiceDream`.
3. Set the duration to match the voice clip length — no resource ID is needed in the notify.

## Editor Properties

No user-configurable properties. The voice resource is determined entirely at runtime from `UB1DreamComponent`.

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Gets `UB1DreamComponent` from the character, calls `dreamComponent->GetVoiceResourceId()` to resolve the voice asset, spawns sound attached to the head socket via `UB1AudioManager::SpawnSoundAttached()` |
| `NotifyEnd` | Stops the audio component |

## Related

- `B1AnimNotifyState_VoiceInteraction` — voice during interaction animations (fixed resource ID)
- `B1AnimNotifyState_VoiceTalk` — voice during Talk animations
- `B1AnimNotifyState_VoiceIdle` — voice during idle animations
