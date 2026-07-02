# B1AnimNotifyState_PlayVATAnim

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_PlayVATAnim.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Plays a Vertex Animation Texture (VAT) animation on a spawned Static Mesh Actor for the duration of the notify range. VAT is used for lightweight prop animations that don't require a Skeletal Mesh (e.g., a folding chair, a flag waving).

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_PlayVATAnim`.
3. Assign the `StaticMesh` (must have a VAT material) and set `AnimName` in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `SocketName` | `FName` | — | Socket at which to spawn the mesh |
| `StaticMesh` | `UStaticMesh*` | — | Static mesh with a VAT-compatible material |
| `bAttached` | `bool` | false | If true, the spawned mesh follows the socket during the animation |
| `bSync` | `bool` | false | If true, synchronizes the VAT start time with the current montage playback position |
| `LocationOffset` | `FVector` | (0,0,0) | Position offset |
| `RotationOffset` | `FRotator` | (0,0,0) | Rotation offset |
| `Scale` | `FVector` | (1,1,1) | Scale of the spawned mesh |
| `AnimName` | `FName` | — | Name of the VAT animation sequence to play |

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Spawns `AStaticMeshActor` with `UB1AnimToTexComponent`; if `bSync`, calculates the VAT start time from the current montage position; calls `animToTexComponent->PlayAnimSequence(AnimName, startTime)` |
| `NotifyEnd` | Destroys all spawned actors for this notify instance and cleans up the internal tracking map |
