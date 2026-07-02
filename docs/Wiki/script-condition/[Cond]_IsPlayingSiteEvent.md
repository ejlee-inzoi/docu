---
slug: "/Wiki/script-condition/Cond_IsPlayingSiteEvent"
---

# [Cond]_IsPlayingSiteEvent

Overview
==

* Checks whether the target character is currently participating in a site event or social event.

Parameter
=========

| **Params**   | **Description**                                                                 |
|--------------|----------------------------------------------------------------------------------|
| BaseObject   | The object to check the condition for                                            |
| Command      | IsPlayingSiteEvent                                                               |
| CompareType  | Type of comparison                                                               |
| S1           | SiteEvent or SocialEvent ID to check. If left blank, checks for any active event |

Examples
========

| **Example Description**                                        | **BaseObject** | **Command**         | **CompareType** | **S1**   | **S2** | **F1** | **F2** |
|----------------------------------------------------------------|----------------|----------------------|------------------|----------|--------|--------|--------|
| If I am participating in any site or social event              | Self           | IsPlayingSiteEvent   | Equal            |          |        |        |        |
| If the target is not participating in any site/social event    | Self           | IsPlayingSiteEvent   | NotEqual         |          |        |        |        |
| If I am participating in the "Party" event                     | Self           | IsPlayingSiteEvent   | Equal            | Party    |        |        |        |
| If I am NOT participating in the "Party" event                 | Self           | IsPlayingSiteEvent   | NotEqual         | Party    |        |        |        |
