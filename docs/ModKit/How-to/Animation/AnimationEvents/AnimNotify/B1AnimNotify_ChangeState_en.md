# B1AnimNotify_ChangeState

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_ChangeState.h / .cpp`
**Base Class:** `UAnimNotify`

> **Note:** Implementation is currently commented out (work in progress).

## Purpose

Triggers a state-group transition on a target object at the notify frame.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `Target` | `EB1BaseObject` | — | Target object to change state on |
| `ChangedStateGroupName` | `FName` | — | Identifier of the state group |
| `ChangeStateName` | `FName` | — | New state name within the group |
