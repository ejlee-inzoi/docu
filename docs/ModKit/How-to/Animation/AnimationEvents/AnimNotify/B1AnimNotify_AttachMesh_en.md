# B1AnimNotify_AttachMesh

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_AttachMesh.h / .cpp`
**Base Class:** `UAnimNotify`

## Purpose

Attaches a Static Mesh to a named socket on the character's Skeletal Mesh at the notify frame.

> **Prefer** `B1AnimNotifyState_AttachDetachMesh` for new work — it handles detachment automatically at the end of its range, avoiding the need for a separate detach notify.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_AttachMesh`.
3. Configure the properties below in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `SocketName` | `FName` | — | Socket on the Skeletal Mesh to attach the mesh to |
| `StaticMesh` | `UStaticMesh*` | — | Static mesh asset to spawn and attach |
| `LocationOffset` | `FVector` | (0,0,0) | Local position offset relative to the socket |
| `RotationOffset` | `FRotator` | (0,0,0) | Local rotation offset relative to the socket |
| `Scale` | `FVector` | (1,1,1) | Scale of the spawned mesh |
| `bDeleteOnlySelfCreatedMesh` | `bool` | false | If true, only removes meshes spawned by this notify instance (leaves others intact) |

## Behavior

At the notify frame, spawns an `AStaticMeshActor`, sets the provided mesh, configures LOD and visibility, then attaches it to the named socket. To remove it, use `B1AnimNotify_DetachMesh` (deprecated) or place a `B1AnimNotifyState_AttachDetachMesh` instead.

## Related

- `B1AnimNotify_DetachMesh` — removes meshes by socket name *(deprecated)*
- `B1AnimNotifyState_AttachDetachMesh` — preferred state variant with auto-detach
- `B1AnimNotifyState_AttachDetachMeshByData` — data-table-driven variant
