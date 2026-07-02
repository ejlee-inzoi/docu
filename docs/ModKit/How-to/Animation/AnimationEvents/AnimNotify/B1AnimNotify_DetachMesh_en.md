# B1AnimNotify_DetachMesh *(Deprecated)*

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_DetachMesh.h / .cpp`
**Base Class:** `UAnimNotify`

> **Deprecated.** Use `B1AnimNotifyState_AttachDetachMesh` instead, which handles both attach and detach automatically within a single state range.

## Purpose

Detaches and destroys all Static Mesh actors attached to the specified socket on the character's Skeletal Mesh.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `SocketName` | `FName` | — | Socket name whose attached meshes will be detached and removed |

## Behavior

At the notify frame, finds all `AStaticMeshActor` instances attached to the named socket and destroys them.

## Related

- `B1AnimNotifyState_AttachDetachMesh` — preferred replacement (auto attach + detach)
- `B1AnimNotify_AttachMesh` — spawns the mesh that this notify removes
