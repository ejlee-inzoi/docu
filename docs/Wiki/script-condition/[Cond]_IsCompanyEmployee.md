---
slug: "/Wiki/script-condition/Cond_IsCompanyEmployee"
---

# [Cond]_IsCompanyEmployee

Overview
==

* Condition to check whether the target is an employee of the company associated with the lot they are currently on.

Parameter
=========

| **Params**   | **Description**                              |
|--------------|-----------------------------------------------|
| BaseObject   | The object to check the condition for         |
| Command      | IsCompanyEmployee                             |
| CompareType  | Comparison type (`Equal` for true, `NotEqual` for false) |

Examples
========

| **Example Description**                         | **BaseObject** | **Command**         | **CompareType** | **S1** | **S2** | **F1** | **F2** |
|--------------------------------------------------|----------------|----------------------|------------------|--------|--------|--------|--------|
| If I am an employee at the current location      | Self           | IsCompanyEmployee    | Equal            |        |        |        |        |
| If the target is not an employee at this location| Target         | IsCompanyEmployee    | NotEqual         |        |        |        |        |
