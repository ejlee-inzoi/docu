# B1AnimNotifyState_AttachDetachMeshByData

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_AttachMesh.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Data-driven variant of `B1AnimNotifyState_AttachDetachMesh`. Instead of referencing a mesh asset directly, it uses a `AttachMeshVariationKey` to look up the mesh from `FB1AnimAttachMeshTableRow` at runtime. Useful when the same notify needs to show different meshes depending on context (e.g., different tool types).

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_AttachDetachMeshByData`.
3. Drag the right edge to set the duration, then configure properties in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `SocketName` | `FName` | — | Socket to attach the mesh to |
| `AttachMeshVariationKey` | `FName` | — | Key used to look up the mesh in `FB1AnimAttachMeshTableRow` via `DT_FINDROW` |
| `LocationOffset` | `FVector` | (0,0,0) | Local position offset |
| `RotationOffset` | `FRotator` | (0,0,0) | Local rotation offset |
| `Scale` | `FVector` | (1,1,1) | Scale of the spawned mesh |

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Looks up `FB1AnimAttachMeshTableRow` using `AttachMeshVariationKey`, loads the mesh, spawns `AStaticMeshActor`, attaches to socket |
| `NotifyEnd` | Destroys the spawned mesh actor |

## Related

- `B1AnimNotifyState_AttachDetachMesh` — direct mesh reference variant
