# B1AnimNotifyState_RunScript

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_RunScript.h / .cpp`
**Base Class:** `UAnimNotifyState`

> **Note:** Implementation is currently commented out (work in progress).

## Purpose

Executes a B2 simulation-side Lua script at the begin and/or end of the notify range. Intended to allow animation events to trigger simulation logic (e.g., stat changes, buff application) at precise animation moments with begin/end semantics.

## Related

- `B1AnimNotify_RunScript` — single-frame variant that fires at one frame
- See `Tech:script` for the Script system architecture
