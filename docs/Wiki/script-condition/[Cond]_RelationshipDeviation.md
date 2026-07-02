---
slug: "/Wiki/script-condition/Cond_RelationshipDeviation"
---

# [Cond]_RelationshipDeviation

Overview
==

* Takes the Relationship Stat of S1 from Self to Target,  
* and subtracts the Relationship Stat of S1 from Target to Self.  
  Then compares whether the magnitude of F1 is greater than or equal to, or less than the result.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | Self |
| Command | RelationshipDeviation |
| CompareType | Comparison operator type (Equal/NotEqual/Greater/…) |
| S1 | RelationshipStat (romance, friendship, family) |
| F1 | Comparison threshold |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| If the romance relationship difference between me and the other is 10 or more | Self | RelationshipDeviation | GreaterEqual | romance |  | 10 |  |
|  |  |  |  |  |  |  |  |
