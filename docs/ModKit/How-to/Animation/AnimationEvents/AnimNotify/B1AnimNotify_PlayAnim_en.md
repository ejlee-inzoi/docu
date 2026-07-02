# B1AnimNotify_PlayAnim

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_PlayAnim.h / .cpp`
**Base Class:** `UAnimNotify`

## Purpose

Triggers a secondary animation on the interaction target game object or on the character itself at the notify frame. Supports conditional animation selection based on body fatness and garment state.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_PlayAnim`.
3. Configure the properties below in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `GameObjectAnimId` | `FName` | — | Animation ID from the `DT_AnimGameObject` data table to play on the target game object |
| `TargetGameObjectType` | `EB1TargetObjectType` | `InteractionTargetObject` | Which game object to target |
| `AnimStartSection` | `EB1LoopAnimSection` | `Default` | Which section of the montage to begin playing from |
| `CharacterAnimId` | `FName` | — | Animation ID from the `DT_AnimCharacter` data table to play on the character |
| `bForcePlayAnim` | `bool` | false | If true, overrides the current animation even if conditions are not met |
| `Conditions` | `TArray<FB1PlayAnimCondition>` | *(empty)* | Optional list of conditions that must be satisfied for the animation to play |

## Behavior

1. Resolves the target game object via `UB1InteractionComponent`.
2. Fills montage parameters using `B1AnimHelper::FillPlayAnimMontageParam()`, applying condition checks (body fatness, garment state).
3. Calls `B1AnimHelper::PlayAnimMontage()` to start the montage on the target.

## Related

- `B1AnimNotifyState_PlayAnim` — state variant that plays the animation for a duration then stops it
