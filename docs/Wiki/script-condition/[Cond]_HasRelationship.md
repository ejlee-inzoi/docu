---
slug: "/Wiki/script-condition/Cond_HasRelationship"
---

# [Cond]_HasRelationship

Overview
==

* Condition command that checks whether a relationship has been formed between two entities  
  (i.e., whether any relationship points have ever been accumulated).

Parameter
=========

| Params      | Description                            |
|-------------|----------------------------------------|
| BaseObject  | Not used                               |
| Command     | HasRelationship                        |
| S1          | TRUE / FALSE — whether a relationship exists |

Examples
========

| Example Description                                 | BaseObject | Command         | CompareType | S1    | S2 | F1 | F2 |
|-----------------------------------------------------|------------|------------------|-------------|-------|----|----|----|
| Has a relationship been formed with the avatar?     |            | HasRelationship  |             | TRUE  |    |    |    |
| Has no relationship been formed with the avatar?    |            | HasRelationship  |             | FALSE |    |    |    |
