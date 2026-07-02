---
slug: "/Wiki/script-condition/Cond_HasCeilingByImpactPoint"
---

# [Cond]_HasCeilingByImpactPoint

Overview
==

* Condition command to check whether there is a ceiling at a specific position.  
* Works only if the position is within a lot. If checked outside a lot, it always returns as if there is no ceiling.

Parameters
==========

| Params      | Description                                |
|-------------|--------------------------------------------|
| BaseObject  | Not used                                   |
| Command     | HasCeilingByImpactPoint                    |
| CompareType | Type of comparison (Equal / NotEqual only) |
| S1          | (Unused)                                   |

Examples
========

| Example                                               | BaseObject      | Command                 | CompareType | S1 | S2 | F1 | F2 |
|-------------------------------------------------------|------------------|--------------------------|-------------|----|----|----|----|
| If there is a ceiling at the specified location       | Self (ignored)   | HasCeilingByImpactPoint  | Equal       |    |    |    |    |
| If there is no ceiling at the specified location      | Self (ignored)   | HasCeilingByImpactPoint  | NotEqual    |    |    |    |    |
