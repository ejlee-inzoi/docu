# B1AnimNotify_AttachActor

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_AttachActor.h / .cpp`
**Base Class:** `UAnimNotify`

## Purpose

Spawns an Actor of the specified class and attaches it to a named socket on the character's Skeletal Mesh at the notify frame. The actor persists until explicitly removed by `B1AnimNotify_DetachActor`.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_AttachActor`.
3. Click the notify icon to open the **Details panel** and configure the properties below.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `SocketName` | `FName` | — | Socket on the Skeletal Mesh to attach the actor to |
| `ActorClass` | `UClass*` | — | Class of the actor to spawn |
| `ActorTag` | `FName` | — | Tag assigned to the spawned actor; used by `B1AnimNotify_DetachActor` to find and remove it |
| `LocationOffset` | `FVector` | (0,0,0) | Local position offset relative to the socket |
| `RotationOffset` | `FRotator` | (0,0,0) | Local rotation offset relative to the socket |
| `Scale` | `FVector` | (1,1,1) | Scale of the spawned actor |

## Behavior

At the notify frame, the actor is spawned in the world and then `AttachToComponent()` is called to attach it to the specified socket of the character's Skeletal Mesh. The actor remains attached until removed by `B1AnimNotify_DetachActor` (which matches on `ActorTag`).

## Related

- `B1AnimNotify_DetachActor` — removes actors by tag
- `B1AnimNotifyState_AttachDetachActor` — state variant that auto-detaches at end of range
