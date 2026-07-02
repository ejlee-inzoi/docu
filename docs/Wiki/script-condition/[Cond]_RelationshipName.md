---
slug: "/Wiki/script-condition/Cond_RelationshipName"
---

# [Cond]_RelationshipName

Overview
==

* A condition command for comparing relationships with an avatar  
* Note  
  + RelationshipName – Checks the relationship only with the script target  
  + HasRelationshipName – Checks the relationship with all avatars you have a connection with

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | Currently unused |
| Command | RelationshipName |
| CompareType | Equal, NotEqual |
| S1 | Relationship ID to compare |
|  |  |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| If the relationship with the avatar is "Lover" | Target | RelationshipName | Equal | couple1 |  |  |  |
| If the relationship with the avatar is not "Lover" | Target | RelationshipName | NotEqual | couple1 |  |  |  |
| If the relationship with the avatar is "Just Good Friends" | Target | RelationshipName | Equal | bestfriend |  |  |  |
| If the relationship with the avatar is not "Just Good Friends" | Target | RelationshipName | NotEqual | bestfriend |  |  |  |
| **If the relationship with the avatar is "Housemate"** | **Target** | **RelationshipName** | **Equal** | **Housemate** |  |  |  |
