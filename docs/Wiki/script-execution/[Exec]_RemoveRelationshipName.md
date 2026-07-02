---
slug: "/Wiki/script-execution/Exec_RemoveRelationshipName"
---

# [Exec]_RemoveRelationshipName

Overview
==

* Removes a relationship name  
* **Since both parties share the same Relationship ID, this command works the same whether BaseObject is Self or Target.**

Details
==

| Parameter   | Description                                       |
|-------------|---------------------------------------------------|
| BaseObject  | Object to execute the command                     |
| Command     | RemoveRelationshipName                            |
| S1          | ID of the relationship to remove (Relationship.json) |

Examples
==

| Example                                        | BaseObject | Command               | S1         | S2 | F1 | F2 | Prob |
|------------------------------------------------|------------|------------------------|------------|----|----|----|------|
| Remove "engagement" relationship name between self and target | Self       | RemoveRelationshipName | engagement |    |    |    |      |
