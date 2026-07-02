# B1AnimNotify_LoopStart

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_LoopStart.h / .cpp`
**Base Class:** `UAnimNotify`

## Purpose

Marker notify that flags the start of a loop section within a montage. The Action/Interaction system reads this marker to determine when to begin looping behavior (e.g., staying in a looped interaction animation until conditions change).

No runtime logic is executed by this notify itself — it is purely a data marker consumed by the Action/SubAction system.

## How to Use

Place `B1AnimNotify_LoopStart` at the frame where the loop should begin, and `B1AnimNotify_LoopEnd` at the frame where it should end. The Action system polls these markers to decide whether to continue or exit the loop.

## Related

- `B1AnimNotify_LoopEnd` — marks the end of the loop range
