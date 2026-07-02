# B1AnimNotifyState_PlaySwimEffect

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_PlaySwimEffect.h / .cpp`
**Base Class:** `UAnimNotifyState_TimedNiagaraEffect` *(Niagara plugin)*

## Purpose

Plays a Niagara swim effect (water splash / ripple) while the character is swimming. Automatically stops if the character exits the water mid-animation. Selects different effect templates for ocean vs. fresh water.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_PlaySwimEffect`.
3. Assign `Template` (fresh water) and `TemplateOcean`, set the socket and duration.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `Template` | `UNiagaraSystem*` | — | Niagara effect for fresh water (inherited from base class) |
| `TemplateOcean` | `UNiagaraSystem*` | — | Niagara effect for ocean water |
| `SocketName` | `FName` | — | Socket to attach the effect to (inherited) |
| `LocationOffset` | `FVector` | (0,0,0) | Position offset (inherited) |
| `RotationOffset` | `FRotator` | (0,0,0) | Rotation offset (inherited) |
| `bDestroyAtEnd` | `bool` | — | Destroy the Niagara component when the notify ends (inherited) |

## Behavior

| Callback | Action |
|---|---|
| `SpawnEffect (Begin)` | Checks `UB1TerritoryManager::IsInWaterTerritory()` to select between `Template` and `TemplateOcean`, then spawns and attaches the Niagara system |
| `NotifyTick` | Checks `character->GetPostureType() == EB1PostureType::Swim`; stops the effect early if the character is no longer swimming |
| `NotifyEnd` | Stops and destroys the Niagara component |
