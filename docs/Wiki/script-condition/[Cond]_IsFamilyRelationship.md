---
slug: "/Wiki/script-condition/Cond_IsFamilyRelationship"
---

# [Cond]_IsFamilyRelationship

Overview
==

* Checks whether the target has a specific family relationship with Self.  
* If `S1` is left empty, the condition only checks whether Self and Target belong to the same family.

Parameter
=========

| **Params**    | **Description**                                                                 |
|---------------|----------------------------------------------------------------------------------|
| BaseObject    | The object to check the condition for — checks the relationship from Self to Target |
| Command       | IsFamilyRelationship                                                            |
| CompareType   | Type of comparison                                                              |
| S1            | `EB1FamilyRelationshipType` to compare.<br>If empty, checks only if they are in the same family. |

**EB1FamilyRelationshipType (Enum)**
====================================

| **Value**        | **Description**           |
|------------------|---------------------------|
| Spouse           | Spouse                    |
| Parent           | Parent                    |
| Sibling          | Sibling                   |
| Child            | Child                     |
| GrandParent      | Grandparent               |
| GrandChild       | Grandchild                |
| Ancestor         | Ancestor                  |
| Descendant       | Descendant                |
| Uncle            | Uncle                     |
| Aunt             | Aunt                      |
| Nephew           | Nephew                    |
| Cousin           | Cousin                    |
| SisterInLaw      | Sister-in-law             |
| BrotherInLaw     | Brother-in-law            |

Examples
========

| **Example Description**                     | **BaseObject** | **Command**           | **CompareType** | **S1**   | **S2** | **F1** | **F2** |
|---------------------------------------------|----------------|------------------------|------------------|----------|--------|--------|--------|
| If the target is my spouse                  | Target         | IsFamilyRelationship   | Equal            | Spouse   |        |        |        |
| If the target is not my spouse              | Target         | IsFamilyRelationship   | NotEqual         | Spouse   |        |        |        |
| If the target is my sibling                 | Target         | IsFamilyRelationship   | Equal            | Sibling  |        |        |        |
| If the target belongs to the same family    | Target         | IsFamilyRelationship   | Equal            |          |        |        |        |
| If the target does NOT belong to my family  | Target         | IsFamilyRelationship   | NotEqual         |          |        |        |        |
