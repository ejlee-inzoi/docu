---
slug: "/Wiki/script-condition/Cond_HasRemainingFood"
---

# [Cond]_HasRemainingFood

Overview
==

* Condition command that checks whether a Food object still has remaining portions.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | HasRemainingFood                         |
| CompareType | Type of comparison                       |

Examples
========

| Example Description                                                              | BaseObject | Command           | CompareType | S1 | S2 | F1 | F2 | Prob |
|----------------------------------------------------------------------------------|------------|--------------------|-------------|----|----|----|----|-------|
| If the target food still has portions (e.g., pizza has not been fully eaten)    | Target     | HasRemainingFood   | Equal       |    |    |    |    |       |
| If the target food is empty (e.g., cake has been completely eaten)              | Target     | HasRemainingFood   | NotEqual    |    |    |    |    |       |
