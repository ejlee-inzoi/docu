---
slug: "/Wiki/script-condition/Cond_IsLocateSiteInBaby"
---

# [Cond]_IsLocateSiteInBaby

Overview
==

* Condition that checks whether there is a baby present on the site where the current character is located.

Parameter
=========

| Params      | Description                                                                                   |
|-------------|-----------------------------------------------------------------------------------------------|
| BaseObject  | The object to check the condition for                                                         |
| Command     | IsLocateSiteInBaby                                                                            |
| CompareType | Comparison type (Equal / NotEqual)                                                            |
| S1          | Scope of check:<br>• (empty): All<br>• Visitor – checks visitors on the site<br>• Household – checks site residents<br>• Other values – checks both visitors and residents |
| S2          | -                                                                                             |
| F1          | -                                                                                             |
| F2          | -                                                                                             |

Examples
========

| Example Description                                      | BaseObject | Command             | CompareType | S1       | S2 | F1 | F2 |
|----------------------------------------------------------|------------|----------------------|-------------|----------|----|----|----|
| If there is a baby on the current site                   | Self       | IsLocateSiteInBaby   | Equal       |          |    |    |    |
| If there is no baby on the current site                  | Self       | IsLocateSiteInBaby   | NotEqual    |          |    |    |    |
| If there is a baby among the visitors on the current site| Self       | IsLocateSiteInBaby   | Equal       | Visitor  |    |    |    |
