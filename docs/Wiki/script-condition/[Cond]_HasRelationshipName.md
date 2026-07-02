---
slug: "/Wiki/script-condition/Cond_HasRelationshipName"
---

# [Cond]_HasRelationshipName

Overview
==

* Condition command that checks whether the avatar has any relationship of the specified type.  
* Note:  
  + `RelationshipName` checks the relationship with the script's target only.  
  + `HasRelationshipName` checks for the specified relationship across all avatars.

Parameter
=========

| Params      | Description                       |
|-------------|-----------------------------------|
| BaseObject  | Not used                          |
| Command     | HasRelationshipName               |
| CompareType | Type of comparison                |
| S1          | Relationship ID to compare        |

Examples
========

| Example Description                              | BaseObject | Command             | CompareType | S1         |
|--------------------------------------------------|------------|----------------------|-------------|------------|
| If I have an 'engagement' relationship           | Self       | RelationshipName     | Equal       | engagement |
| If I do NOT have an 'engagement' relationship    | Self       | RelationshipName     | NotEqual    | engagement |
| If the target has an 'engagement' relationship   | Target     | RelationshipName     | Equal       | engagement |
| If the target does NOT have an 'engagement' relationship | Target | RelationshipName     | NotEqual    | engagement |
