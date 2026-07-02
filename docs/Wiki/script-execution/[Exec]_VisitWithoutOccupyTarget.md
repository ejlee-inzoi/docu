---
slug: "/Wiki/script-execution/Exec_VisitWithoutOccupyTarget"
---

# [Exec]_VisitWithoutOccupyTarget

Overview
==

* Makes the BaseObject (Self or Target) visit the other character’s location (`S1`) and then execute a follow-up script (`S2`).  
* Unlike `VisitWithOccupyTarget`, this does **not** occupy or restrict the target — only the base character moves and acts.  
* The target’s behavior is unaffected, but still becomes the target of the follow-up script.

### Key Notes:
- Uses “Call Here” logic for movement.
- If the base character is not spawned, they will be spawned and moved to the destination.
- Interaction capability is required for the base character.
- Travel time is not guaranteed; teleportation may occur near the destination.

Details
==

| Parameter   | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | Self or Target — the actor executing the visit                              |
| Command     | VisitWithoutOccupyTarget                                                    |
| S1          | Destination based on the other character: `TargetCurrentLocation` or `TargetResidingSite` |
| S2          | Script to execute after base character arrives.  <br> - `Self` = BaseObject  <br> - `Target` = the other character (non-base)                                  |

Examples
==

| Example                                                                            | BaseObject | Command                | S1                   | S2                       | F1 | F2 | Prob |
|------------------------------------------------------------------------------------|------------|-------------------------|------------------------|----------------------------|----|----|------|
| Self goes to Target's current location and runs a howling script                  | Self       | VisitWithoutOccupyTarget | TargetCurrentLocation  | 하울링 스크립트 id          |    |    |      |
| Self goes to Target's residence and triggers an opportunity card script           | Self       | VisitWithoutOccupyTarget | TargetResidingSite     | 기회카드 스크립트 id        |    |    |      |
| Target goes to Self’s residence and triggers a script (context flips in script)   | Target     | VisitWithoutOccupyTarget | TargetResidingSite     | 기회카드 스크립트 id        |    |    |      |
