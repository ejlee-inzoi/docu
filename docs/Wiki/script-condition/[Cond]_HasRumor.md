---
slug: "/Wiki/script-condition/Cond_HasRumor"
---

# [Cond]_HasRumor

Overview
==

* Checks whether the target possesses a specific rumor.

Parameter
=========

| Params      | Description                                |
|-------------|--------------------------------------------|
| BaseObject  | The object to check the condition for       |
| Command     | HasRumor                                   |
| CompareType | Equal / NotEqual                           |
| S1          | Rumor ID (defined in Rumor.json)           |
| S2          | -                                          |
| F1          | -                                          |
| F2          | -                                          |

Examples
========

| Example Description                               | BaseObject | Command   | CompareType | S1         | S2 | F1 | F2 |
|---------------------------------------------------|------------|-----------|-------------|------------|----|----|----|
| Check if the target has a specific rumor          | Target     | HasRumor  | Equal       | RumorTest  |    |    |    |
