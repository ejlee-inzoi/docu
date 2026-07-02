---
slug: "/Wiki/script-condition/Cond_HasCeiling"
---

# [Cond]_HasCeiling

Overview
==

* Condition that checks whether there is a ceiling above the BaseObject’s current position.  
* Works only when the object is inside a lot. If evaluated outside a lot, it will always return as if there is no ceiling.

Parameters
==========

| Params      | Description                                  |
|-------------|----------------------------------------------|
| BaseObject  | Object to check the condition on             |
| Command     | HasCeiling                                   |
| CompareType | Type of comparison (Equal / NotEqual only)   |
| S1          | (Unused)                                     |

Examples
========

| Example                                                         | BaseObject | Command    | CompareType | S1 | S2 | F1 | F2 |
|-----------------------------------------------------------------|------------|------------|-------------|----|----|----|----|
| If there is a ceiling above the Self character's position       | Self       | HasCeiling | Equal       |    |    |    |    |
| If there is no ceiling above the Target's position              | Target     | HasCeiling | NotEqual    |    |    |    |    |
