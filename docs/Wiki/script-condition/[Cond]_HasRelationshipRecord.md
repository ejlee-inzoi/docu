---
slug: "/Wiki/script-condition/Cond_HasRelationshipRecord"
---

# [Cond]_HasRelationshipRecord

Overview
==

* Checks whether the BaseObject has a specific relationship record with the TargetObject.  
* Warning: Relationship records are limited. Older records may be deleted as new ones accumulate.

Parameter
=========

| Params      | Description                                       |
|-------------|---------------------------------------------------|
| BaseObject  | The character to check the relationship record for (Self/Target) |
| Command     | HasRelationshipRecord                             |
| CompareType | Type of comparison (Equal / NotEqual)             |
| S1          | RelationshipRecordId to compare                   |

Examples
========

| Example Description                                  | BaseObject | Command               | CompareType | S1                        | S2 | F1 | F2 |
|------------------------------------------------------|------------|------------------------|-------------|----------------------------|----|----|----|
| If I was proposed to by the target                  | Self       | HasRelationshipRecord | Equal       | Propose_Success_Target     |    |    |    |
| If I was not proposed to by the target              | Self       | HasRelationshipRecord | NotEqual    | Propose_Success_Target     |    |    |    |
| If I proposed to the target                         | Self       | HasRelationshipRecord | Equal       | Propose_Success_Self       |    |    |    |
| If the target was proposed to by me                 | Target     | HasRelationshipRecord | Equal       | Propose_Success_Target     |    |    |    |
