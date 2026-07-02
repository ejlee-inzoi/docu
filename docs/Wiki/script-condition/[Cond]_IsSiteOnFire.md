---
slug: "/Wiki/script-condition/Cond_IsSiteOnFire"
---

# [Cond]_IsSiteOnFire

Overview
==

* Checks whether the site specified by the `BaseObject`'s `SiteEntityId` (FB1EntityId) is currently on fire.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object (or site entity) to evaluate  |
| Command     | IsSiteOnFire                             |
| CompareType | Type of comparison                       |

Examples
========

| Example Description                             | BaseObject | Command       | CompareType | S1 | S2 | F1 | F2 |
|-------------------------------------------------|------------|----------------|-------------|----|----|----|----|
| If the given site is currently on fire          | Self       | IsSiteOnFire   | Equal       |    |    |    |    |
