---
slug: "/Wiki/script-condition/Cond_HasFamilyRelationship"
---

# [Cond]_HasFamilyRelationship

Overview
==

* Checks whether the character has a specific type of family relationship.

Parameter
=========

| Params      | Description                             |
|-------------|-----------------------------------------|
| BaseObject  | The object to check the condition for   |
| Command     | HasFamilyRelationship                   |
| CompareType | Type of comparison                      |
| S1          | Family relationship type (see enum below) |

**EB1FamilyRelationshipType (Enum)**
====================================

Enumeration of supported family relationship types.

| Value          | Description           |
|----------------|-----------------------|
| Spouse         | Spouse                |
| Parent         | Parent                |
| Sibling        | Sibling               |
| Child          | Child                 |
| GrandParent    | Grandparent           |
| GrandChild     | Grandchild            |
| Ancestor       | Ancestor              |
| Descendant     | Descendant            |
| Uncle          | Uncle                 |
| Aunt           | Aunt                  |
| Nephew         | Nephew                |
| Cousin         | Cousin                |
| SisterInLaw    | Sister-in-law         |
| BrotherInLaw   | Brother-in-law        |

Examples
========

| Example                        | BaseObject | Command               | CompareType | S1      | S2 | F1 | F2 |
|--------------------------------|------------|------------------------|-------------|---------|----|----|----|
| If married                    | Self       | HasFamilyRelationship  | Equal       | Spouse  |    |    |    |
| If unmarried                 | Self       | HasFamilyRelationship  | NotEqual    | Spouse  |    |    |    |
| If I have a sibling           | Self       | HasFamilyRelationship  | Equal       | Sibling |    |    |    |
