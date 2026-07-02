---
slug: "/Wiki/script-execution/Exec_UpdateMainRelationship"
---

# [Exec]_UpdateMainRelationship

Overview
==

* Updates the Main/Trait Relationship between Self and Target based on the latest relationship status.  
* Triggered when certain conditions about relationship type, affinity, and level are met.

### Update Conditions:
- **A.** The highest current relationship type ≠ existing main relationship type  
- **B.** The affinity (like/dislike) of the current top relationship differs from the existing one  
- **C.** The relationship stage is at level 2 or 3 (positive/negative)

If **A + B + C** are all satisfied, the main relationship is updated as follows:
- Set to the current highest relationship type  
- Apply +1/+2 or -1/-2 based on the level  
- No update based on natural decay over time  
- *FamilyAffection* always takes priority over higher Friendship levels

Details
==

| Parameter   | Description                   |
|-------------|-------------------------------|
| BaseObject  | Object to execute the command |
| Command     | UpdateMainRelationship        |

Examples
==

| Example                                             | BaseObject | Command                | S1 | S2 | F1 | F2 | Prob |
|-----------------------------------------------------|------------|-------------------------|----|----|----|----|------|
| Update Main/Trait Relationship between Self & Target| Self       | UpdateMainRelationship  |    |    |    |    |      |
