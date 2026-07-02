---
slug: "/Wiki/script-execution/Exec_VisitWithOccupyTarget"
---

# [Exec]_VisitWithOccupyTarget

Overview
==

* Makes the BaseObject character (Self or Target) visit the other character’s location (`S1`) and then execute a follow-up script (`S2`).  
* This command occupies the **other** character, requiring both to remain at the destination.  
* It behaves similarly to a "Call Here" cooperative action: if either character isn’t spawned, they will be spawned and moved.  
* The interaction will only work if both characters are in an **interactive state**.  
* If the destination is far, teleportation near the location may occur — but arrival is not instant or guaranteed.

Details
==

| Parameter   | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | Self or Target — the actor executing the visit                              |
| Command     | VisitWithOccupyTarget                                                       |
| S1          | Destination based on the other character: `TargetCurrentLocation` or `TargetResidingSite` |
| S2          | Script to execute after both characters arrive. Context:  <br>- `Self` = BaseObject  <br>- `Target` = the other character (non-base)                                  |

Examples
==

| Example                                                                              | BaseObject | Command              | S1                   | S2                          | F1 | F2 | Prob |
|--------------------------------------------------------------------------------------|------------|-----------------------|------------------------|-------------------------------|----|----|------|
| Self moves to Target's current location, then runs a relationship-increase script   | Self       | VisitWithOccupyTarget | TargetCurrentLocation  | 관계증가 스크립트 id           |    |    |      |
| Self moves to Target's home site, then runs an opportunity card script              | Self       | VisitWithOccupyTarget | TargetResidingSite     | 기회카드 스크립트 id           |    |    |      |
| Target moves to Self's home site, then runs an opportunity card script              | Target     | VisitWithOccupyTarget | TargetResidingSite     | 기회카드 스크립트 id (inverted context) |    |    |      |
