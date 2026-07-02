# B1AnimNotifyState_PlayAnim

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_PlayAnim.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Plays a secondary animation on the interaction target game object or character for the duration of the notify range, then stops it when the range ends.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_PlayAnim`.
3. Configure properties in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `GameObjectAnimId` | `FName` | — | Animation ID from `DT_AnimGameObject` to play on the target game object |
| `TargetGameObjectType` | `EB1TargetObjectType` | `InteractionTargetObject` | Which game object to target |
| `AnimStartSection` | `EB1LoopAnimSection` | `Default` | Section of the montage to begin from |
| `CharacterAnimId` | `FName` | — | Animation ID from `DT_AnimCharacter` to play on the character |
| `bForcePlayAnim` | `bool` | false | If true, overrides current animation regardless of conditions |
| `Conditions` | `TArray<FB1PlayAnimCondition>` | *(empty)* | Optional conditions that must be met |

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Resolves the target, calls `B1AnimHelper::PlayAnimMontage()` to start the montage |
| `NotifyEnd` | Stops the montage on the target |

## Related

- `B1AnimNotify_PlayAnim` — single-frame trigger variant (does not stop on end)
