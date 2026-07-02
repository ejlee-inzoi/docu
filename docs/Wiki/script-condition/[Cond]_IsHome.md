---
slug: "/Wiki/script-condition/Cond_IsHome"
---

# [Cond]_IsHome

Overview
==

* Checks whether the lot the character is currently in is their own home.

Parameter
=========

| Params      | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | The object to check the condition for                                       |
| Command     | IsHome                                                                      |
| CompareType | Comparison type (Equal / NotEqual)                                          |
| S1          | Enter either `Self` or `Target`; if left blank, uses BaseObject as default  |

Examples
========

| Example Description                             | BaseObject | Command | CompareType | S1     | S2 | F1 | F2 | Prob |
|-------------------------------------------------|------------|---------|-------------|--------|----|----|----|------|
| If I am at my own home                          | Self       | IsHome  | Equal       |        |    |    |    |      |
| If I am not at my own home                      | Self       | IsHome  | NotEqual    |        |    |    |    |      |
| If I am at the Target's home                    | Self       | IsHome  | Equal       | Target |    |    |    |      |
