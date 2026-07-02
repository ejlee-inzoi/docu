---
slug: "/Wiki/script-condition/Cond_Fail"
---

# [Cond]_Fail

Overview
==

* Command used to force a failure.  
* This condition always returns `false`.  
* Typically used for exception handling in execution logic.

Parameters
==========

| Params      | Description            |
|-------------|------------------------|
| BaseObject  | Not used               |
| Command     | Fail                   |
| CompareType | Type of comparison     |

Examples
========

| Example        | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 | Prob |
|----------------|------------|---------|-------------|----|----|----|----|------|
| Force failure  | Self       | Fail    | Equal       |    |    |    |    |      |
