# B1AnimNotify_DetachActor

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_DetachActor.h / .cpp`
**Base Class:** `UAnimNotify`

## Purpose

Detaches and destroys all actors attached to the character mesh whose tag matches `ActorTag`. Intended as the cleanup counterpart to `B1AnimNotify_AttachActor`.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_DetachActor`.
3. Set `ActorTag` to match the tag used in the corresponding `B1AnimNotify_AttachActor`.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `ActorTag` | `FName` | — | Tag identifying which attached actors to detach and destroy |

## Behavior

At the notify frame, iterates over all actors currently attached to the character's Skeletal Mesh and destroys those whose actor tag matches `ActorTag`.

## Related

- `B1AnimNotify_AttachActor` — spawns and attaches actors
- `B1AnimNotifyState_AttachDetachActor` — state variant that handles attach/detach automatically without needing this notify
