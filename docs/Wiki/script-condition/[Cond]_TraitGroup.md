---
slug: "/Wiki/script-condition/Cond_TraitGroup"
---

# [Cond]_TraitGroup

Overview
==

* A condition command used to determine whether a character possesses any trait from a defined group.  
* The group must first be defined in TraitGroup.json.  
  Example:

| Id | [TraitIds] |
| --- | --- |
| Thinking | Perfectionist |
|  | Independent |
|  | Observer |
|  | Intellect |
|  | Arrogant |
|  | Leader |

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | The object to check the condition against |
| Command | TraitGroup |
| CompareType | Comparison operator type (Equal / NotEqual) |
| S1 | ID of the trait group to check (from TraitGroup.json) |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| If I have Perfectionist, Independent, or any other trait in the group → true | Self | TraitGroup | Equal | Thinking |  |  |  |
