---
slug: "/Wiki/script-condition/Cond_IsFavoriteHandOverObject"
---

# [Cond]_IsFavoriteHandOverObject

Overview
==

* Can only be used during a "Hand Over Item" Coop interaction.  
  Checks whether the receiving character likes the handed-over item.

Parameter
=========

| Parameter   | Description                                                        |
|-------------|--------------------------------------------------------------------|
| BaseObject  | Self/Target — any character currently participating in the Coop    |
| Command     | IsFavoriteHandOverObject                                           |
| CompareType | Comparison type (Equal = likes it, NotEqual = doesn't like it)     |
| F1          |                                                                    |
| F2          |                                                                    |

Examples
========

| Description                                        | BaseObject | Command                | CompareType | F1 | F2 |
|----------------------------------------------------|------------|-------------------------|-------------|----|----|
| Is the handed-over object liked by the receiver?   | Self       | IsFavoriteHandOverObject | Equal       |    |    |
| Is the handed-over object NOT liked by the receiver?| Self       | IsFavoriteHandOverObject | NotEqual    |    |    |
