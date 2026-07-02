# B1AnimNotify_LoopEnd

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_LoopEnd.h / .cpp`
**Base Class:** `UAnimNotify`

## Purpose

Marker notify that flags the end of a loop section within a montage. Paired with `B1AnimNotify_LoopStart`, the Action/Interaction system uses both markers to determine the loop boundary when deciding to continue or exit a looped animation.

No runtime logic is executed by this notify itself — it is purely a data marker consumed by the Action/SubAction system.

## Related

- `B1AnimNotify_LoopStart` — marks the beginning of the loop range
