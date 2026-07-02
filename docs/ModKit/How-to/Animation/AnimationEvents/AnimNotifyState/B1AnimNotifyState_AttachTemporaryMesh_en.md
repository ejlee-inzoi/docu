# B1AnimNotifyState_AttachTemporaryMesh

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_AttachTemporaryMesh.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Attaches a "temporary mesh" to a socket for the duration of the notify range. Unlike `AttachDetachMesh`, the mesh asset is **not set in the notify** — it is resolved at runtime from `UB1AttachMeshComponent::GetCachedTemporaryMeshId()`. This allows the same notify to show different props depending on the current interaction context (e.g., whatever food item the character is currently serving).

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_AttachTemporaryMesh`.
3. Set socket and offset properties. The mesh asset itself is determined at runtime.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `SocketName` | `FName` | — | Socket to attach the temporary mesh to |
| `LocationOffset` | `FVector` | (0,0,0) | Local position offset |
| `RotationOffset` | `FRotator` | (0,0,0) | Local rotation offset |
| `Scale` | `FVector` | (1,1,1) | Scale of the spawned mesh |

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Calls `UB1AttachMeshComponent::GetCachedTemporaryMeshId()`, loads the mesh from `UB1TemporaryMeshDataAsset`, spawns `AStaticMeshActor`, attaches to socket |
| `NotifyEnd` | Destroys the spawned actor |

## Related

- `B1AnimNotifyState_AttachDetachMesh` — hardcoded mesh reference variant
- `B1AnimNotifyState_AttachDetachMeshByData` — key-based data table lookup variant
