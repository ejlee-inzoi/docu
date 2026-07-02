---
slug: "/Wiki/script-condition/Cond_HasHandOverObjectTag"
---

# [Cond]_HasHandOverObjectTag

Overview
==

* Can only be used during a "hand-over item" Coop interaction.  
  Checks whether the handed-over item has a specific object tag.

Parameter
=========

| Parameter  | Description                                                                 |
|------------|-----------------------------------------------------------------------------|
| BaseObject | Self or Target — character participating in the current Coop interaction    |
| Command    | HasHandOverObjectTag                                                        |
| CompareType| Comparison type (Equal, NotEqual)                                           |
| S1         | Object tag to check                                                         |

Examples
========

| Description                                              | BaseObject | Command               | CompareType | S1           |
|----------------------------------------------------------|------------|------------------------|-------------|--------------|
| Does the handed-over item have the "AbsoluteLike" tag?   | Self       | HasHandOverObjectTag  | Equal       | AbsoluteLike |
| Does the handed-over item NOT have the "AbsoluteLike" tag? | Self     | HasHandOverObjectTag  | NotEqual    | AbsoluteLike |
