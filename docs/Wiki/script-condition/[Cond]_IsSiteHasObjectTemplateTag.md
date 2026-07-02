---
slug: "/Wiki/script-condition/Cond_IsSiteHasObjectTemplateTag"
---

# [Cond]_IsSiteHasObjectTemplateTag

Overview
==

* Checks whether the site where the target is located contains an object with a specific `ObjectTag`.  
* If no target is provided, the check defaults to the site under the mouse click point.

Parameter
=========

| **Params**   | **Description**                                                                 |
|--------------|----------------------------------------------------------------------------------|
| BaseObject   | Actor that serves as the reference point for the site (or mouse click if absent)|
| Command      | IsSiteHasObjectTemplateTag                                                      |
| CompareType  | Comparison type (Equal / NotEqual)                                               |
| S1           | `ObjectTag` to check. If `None`, always returns false.                          |

Examples
========

| **Example Description**                                                   | **BaseObject** | **Command**                | **CompareType** | **S1**        | **S2** | **F1** | **F2** |
|---------------------------------------------------------------------------|----------------|----------------------------|------------------|----------------|--------|--------|--------|
| If the site where the target is located contains an object with `CleanObject` tag     | Self           | IsSiteHasObjectTemplateTag | Equal            | CleanObject    |        |        |        |
| If the site where the target is located does NOT contain an object with `CleanObject` | Self           | IsSiteHasObjectTemplateTag | NotEqual         | CleanObject    |        |        |        |
