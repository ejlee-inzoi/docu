---
slug: "/Wiki/script-condition/Cond_IsSameRumor"
---

# [Cond]_IsSameRumor

Overview
==

* Checks whether `Self` and `Target` share the **same rumor**.  
* All three rumors must match, and for a rumor to be considered the same, both the `RumorId` and `Monger` must be identical.

Parameter
=========

| Params      | Description                                  |
|-------------|----------------------------------------------|
| BaseObject  | The object to check the condition for         |
| Command     | IsSameRumor                                  |
| CompareType | Comparison type (Equal / NotEqual)           |
| S1          | -                                            |
| S2          | -                                            |
| F1          | -                                            |
| F2          | -                                            |

Examples
========

| Example Description                                                      | BaseObject | Command     | CompareType | S1 | S2 | F1 | F2 |
|--------------------------------------------------------------------------|------------|--------------|-------------|----|----|----|----|
| Check if the target and its target share the same rumors                | Target     | IsSameRumor  | Equal       |    |    |    |    |
| Check if the target and its target do NOT share the same rumors         | Target     | IsSameRumor  | NotEqual    |    |    |    |    |
