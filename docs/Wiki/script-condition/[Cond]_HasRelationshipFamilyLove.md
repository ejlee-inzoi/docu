---
slug: "/Wiki/script-condition/Cond_HasRelationshipFamilyLove"
---

# [Cond]_HasRelationshipFamilyLove

Overview
==

* Condition command to check whether the character has any family-love relationships.  
* If the character is a single-person household, it will be considered as not having such a relationship.

Parameter
=========

| Params      | Description                        |
|-------------|------------------------------------|
| BaseObject  | Self / Target                      |
| Command     | HasRelationshipFamilyLove          |
| CompareType | Equal / NotEqual                   |

Examples
========

| Example Description                         | BaseObject | Command                   | CompareType | S1 | S2 | F1 | F2 |
|---------------------------------------------|------------|----------------------------|-------------|----|----|----|----|
| If I do NOT have a family-love relationship | Self       | HasRelationshipFamilyLove  | NotEqual    |    |    |    |    |
| If the target HAS a family-love relationship| Target     | HasRelationshipFamilyLove  | Equal       |    |    |    |    |
