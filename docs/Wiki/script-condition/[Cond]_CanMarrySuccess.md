---
slug: "/Wiki/script-condition/Cond_CanMarrySuccess"
---

# [Cond]_CanMarrySuccess

Overview
==

- Checks whether Self and Target can get married.

  + Neither Self nor Target is currently married  
  + Self and Target are not blood relatives  
  + Both Self and Target are at least in the "Young Adult" growth step  
  + Sexual orientations of Self and Target are compatible  
  + Both Self and Target must be romantically oriented (romantic flag is true)  
  + Self and Target must be engaged  

Parameters
==========

| Params   | Description        |
|----------|--------------------|
| Command  | CanMarrySuccess    |

Examples
========

| Example                        | BaseObject | Command          | CompareType | S1 | S2 | F1 | F2 |
|-------------------------------|------------|------------------|-------------|----|----|----|----|
| Check if Self and Target can marry | Self      | CanMarrySuccess | None        |    |    |    |    |
