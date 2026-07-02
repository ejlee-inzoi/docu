---
slug: "/Wiki/script-condition/Cond_IsSameSiteEvent"
---

# [Cond]_IsSameSiteEvent

Overview
==

* Checks whether `Self` and `Target` are participating in the **same site or social event**, and optionally, whether either holds a specific **role**.

Parameter
=========

| Params      | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| Command     | IsSameSiteEvent                                                             |
| CompareType | Comparison type (Equal / NotEqual)                                          |
| S1          | Role ID (from `SiteEvent.RoleInfos.RoleId`). If left blank, role is not checked. |

Examples
========

| Example Description                                                       | BaseObject | Command         | CompareType | S1            | S2 | F1 | F2 | Prob |
|---------------------------------------------------------------------------|------------|------------------|-------------|----------------|----|----|----|-------|
| If Self and Target are participating in the same event                   | Self       | IsSameSiteEvent  | Equal       |                |    |    |    |       |
| If Self and Target are in the same event and one is the Wedding Spouse   | Self       | IsSameSiteEvent  | Equal       | WeddingSpouse  |    |    |    |       |
| If Self and Target are in the same event and NOT playing the Guest role  | Self       | IsSameSiteEvent  | NotEqual    | WeddingGuest   |    |    |    |       |
