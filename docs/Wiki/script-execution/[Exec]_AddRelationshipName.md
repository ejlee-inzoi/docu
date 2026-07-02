---
slug: "/Wiki/script-execution/Exec_AddRelationshipName"
---

# [Exec]_AddRelationshipName

Overview
==

* Adds a relationship name.  
* **Since Self and Target share a single Relationship ID, the command works the same whether BaseObject is set to Self or Target.**

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | AddRelationshipName |
| S1 | ID of the relationship name to add (from Relationship.json) |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Add "MarriagePartner" relationship name between myself and the target | Self | AddRelationshipName | MarriagePartner |  |  |  |  |
