# B1AnimNotify_RunScript

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_RunScript.h / .cpp`
**Base Class:** `UAnimNotify`

> **Note:** Implementation is currently commented out (work in progress).

## Purpose

Executes a B2 simulation-side Lua script at the notify frame. Intended to allow animation events to trigger simulation logic (e.g., stat changes, buff application) at a precise animation moment.

## Related

- `B1AnimNotifyState_RunScript` — state variant that fires script at begin and end of a range
- See `Tech:script` for the Script system architecture
