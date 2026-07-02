# B1AnimNotifyState_AttachDetachMesh

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_AttachMesh.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Attaches a Static Mesh to a socket for the duration of the notify range, then automatically detaches and destroys it on end. Preferred over `B1AnimNotify_AttachMesh` + `B1AnimNotify_DetachMesh`.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_AttachDetachMesh`.
3. Drag the right edge to set the duration, then configure properties in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `SocketName` | `FName` | — | Socket on the Skeletal Mesh to attach to |
| `StaticMesh` | `UStaticMesh*` | — | Static mesh asset to spawn and attach |
| `LocationOffset` | `FVector` | (0,0,0) | Local position offset |
| `RotationOffset` | `FRotator` | (0,0,0) | Local rotation offset |
| `Scale` | `FVector` | (1,1,1) | Scale of the spawned mesh |
| `bDeleteOnlySelfCreatedMesh` | `bool` | false | If true, only removes meshes spawned by this notify instance |

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Spawns `AStaticMeshActor`, configures LOD/visibility, attaches to socket |
| `NotifyEnd` | Destroys the spawned mesh actor — called even on montage interruption |

## Related

- `B1AnimNotifyState_AttachDetachMeshByData` — data-table-driven variant (no direct mesh reference)
- `B1AnimNotifyState_HideOriginMesh` — hides the character's original mesh while active
- `B1AnimNotifyState_AttachTemporaryMesh` — runtime-resolved mesh variant
