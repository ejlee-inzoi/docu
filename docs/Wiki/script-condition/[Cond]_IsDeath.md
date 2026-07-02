---
slug: "/Wiki/script-condition/Cond_IsDeath"
---

# [Cond]_IsDeath

Overview
==

* Condition command to check whether a character object is dead.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | IsDeath                                  |
| CompareType | Comparison type (Equal / NotEqual)       |

Examples
========

| Example Description                     | BaseObject | Command  | CompareType | S1 | S2 | F1 | F2 | Prob |
|-----------------------------------------|------------|----------|-------------|----|----|----|----|-------|
| If I am a dead character                | Self       | IsDeath  | Equal       |    |    |    |    |       |
| If the target is not dead               | Target     | IsDeath  | NotEqual    |    |    |    |    |       |
