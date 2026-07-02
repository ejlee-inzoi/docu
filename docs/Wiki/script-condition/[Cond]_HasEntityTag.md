---
slug: "/Wiki/script-condition/Cond_HasEntityTag"
---

# [Cond]_HasEntityTag

Overview
==

* Checks whether the entity has a specific tag.

Parameter
=========

|         | Description                             |
|---------|-----------------------------------------|
| BaseObject | The object to check the condition for |
| Command     | HasEntityTag                        |
| CompareType | Equal / NotEqual                    |
| S1          | Tag to compare                      |
| S2          | -                                   |
| F1          | -                                   |
| F2          | -                                   |

Examples
========

| Example                                     | BaseObject | Command       | CompareType | S1  | S2 | F1 | F2 |
|---------------------------------------------|------------|----------------|-------------|-----|----|----|----|
| If I have the "QWE" tag                     | Self       | HasEntityTag   | Equal       | QWE |    |    |    |
| If the target does not have the "QWE" tag   | Target     | HasEntityTag   | NotEqual    | QWE |    |    |    |
