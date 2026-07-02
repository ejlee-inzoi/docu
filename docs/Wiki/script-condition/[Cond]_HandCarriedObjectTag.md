---
slug: "/Wiki/script-condition/Cond_HandCarriedObjectTag"
---

# [Cond]_HandCarriedObjectTag

Overview
==

* Checks whether the object currently held by the target has a specific tag (defined in ObjectData - ObjectTag).

Parameters
==========

| Params      | Description                          |
|-------------|--------------------------------------|
| BaseObject  | Object to check the condition on     |
| Command     | HandCarriedObjectTag                 |
| CompareType | Type of comparison                   |
| S1          | Name of the ObjectTag to compare     |

Examples
========

| Example                                                              | BaseObject | Command               | CompareType | S1     | S2 | F1 | F2 | Prob |
|----------------------------------------------------------------------|------------|------------------------|-------------|--------|----|----|----|------|
| If the object I'm currently holding has the "Nature" tag            | Self       | HandCarriedObjectTag   | Equal       | Nature |    |    |    |      |
| If the object I'm currently holding does NOT have the "Nature" tag  | Self       | HandCarriedObjectTag   | NotEqual    | Nature |    |    |    |      |
