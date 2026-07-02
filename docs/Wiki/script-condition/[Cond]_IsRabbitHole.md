---
slug: "/Wiki/script-condition/Cond_IsRabbitHole"
---

# [Cond]_IsRabbitHole

Overview
==

* Checks whether `Self` or `Target` is currently in a **RabbitHole** state (i.e., engaged in an off-screen or scripted activity).

Parameter
=========

| Params      | Description                                |
|-------------|--------------------------------------------|
| BaseObject  | The object to check (Self / Target)        |
| Command     | IsRabbitHole                               |
| CompareType | Comparison type (Equal / NotEqual)         |

Examples
========

| Example Description                         | BaseObject | Command       | CompareType | S1 | S2 | F1 | F2 |
|---------------------------------------------|------------|----------------|-------------|----|----|----|----|
| If I am currently in a RabbitHole           | Self       | IsRabbitHole   | Equal       |    |    |    |    |
| If the target is NOT currently in a RabbitHole | Target     | IsRabbitHole   | NotEqual    |    |    |    |    |
