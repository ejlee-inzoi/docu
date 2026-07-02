---
slug: "/Wiki/script-condition/Cond_Is_Soldout"
---

# [Cond]_Is_Soldout

Overview
==

* Determines whether the target object is in a "sold" (soldout) state.

Parameter
=========

| Parameter   | Description                             |
|-------------|-----------------------------------------|
| BaseObject  | The object to execute the command on    |
| Command     | Is_Soldout                              |
| S1          | StateId                                 |
| S2          | StateId                                 |

Examples
========

| Example Description                              | BaseObject | Command     | S1      | S2      | F1 | F2 | Prob |
|--------------------------------------------------|------------|--------------|---------|---------|----|----|------|
| Check if the target is currently in a soldout state | Target     | Is_Soldout   | Soldout | Soldout |    |    |      |
