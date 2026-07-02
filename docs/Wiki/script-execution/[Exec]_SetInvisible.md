---
slug: "/Wiki/script-execution/Exec_SetInvisible"
---

# [Exec]_SetInvisible

### Overview

Makes the specified object (BaseObject) invisible or visible.  
If `F1` is close to 0, the object becomes **visible**; otherwise, it becomes **invisible**.  
`S1` specifies the reason for invisibility.  
The object will only become visible again when all invisibility reasons are cleared.

---

### Details

| Parameter   | Description                                            |
|-------------|--------------------------------------------------------|
| BaseObject  | Target object to apply visibility change               |
| Command     | SetInvisible                                           |
| F1          | Close to 0 = visible, non-zero = invisible             |
| S1          | Reason string for invisibility (e.g., "Sleep", "HiddenInCutscene") |

---

### Examples

| Example                                                       | BaseObject | Command      | S1                 | S2 | F1  | F2 | Prob |
|---------------------------------------------------------------|------------|--------------|--------------------|----|-----|----|------|
| Add "Sleep" reason to self and make invisible                 | Self       | SetInvisible | Sleep              |    | 1.0 |    |      |
| Remove "HiddenInCutscene" reason from target and make visible| Target     | SetInvisible | HiddenInCutscene   |    | 0.0 |    |      |
