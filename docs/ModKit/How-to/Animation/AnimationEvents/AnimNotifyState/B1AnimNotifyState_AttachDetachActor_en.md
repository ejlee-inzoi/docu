# B1AnimNotifyState_AttachDetachActor

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_AttachActor.h / .cpp`
**Base Class:** `UAnimNotifyState`

## Purpose

Attaches a spawned Actor to a socket for the duration of the notify range, then automatically detaches and destroys it when the range ends. Preferred over the `B1AnimNotify_AttachActor` + `B1AnimNotify_DetachActor` pair.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_AttachDetachActor`.
3. Drag the right edge to set the duration, then configure properties in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `SocketName` | `FName` | — | Socket on the Skeletal Mesh to attach the actor to |
| `ActorClass` | `UClass*` | — | Class of the actor to spawn |
| `ActorTag` | `FName` | — | Tag assigned to the spawned actor |
| `LocationOffset` | `FVector` | (0,0,0) | Local position offset relative to the socket |
| `RotationOffset` | `FRotator` | (0,0,0) | Local rotation offset relative to the socket |
| `Scale` | `FVector` | (1,1,1) | Scale of the spawned actor |

## Behavior

| Callback | Action |
|---|---|
| `NotifyBegin` | Spawns the actor and attaches it to the socket |
| `NotifyEnd` | Detaches and destroys the actor — called even on montage interruption |

## Related

- `B1AnimNotify_AttachActor` — single-frame spawn (requires manual `DetachActor` notify)
- `B1AnimNotify_DetachActor` — manual detach counterpart
