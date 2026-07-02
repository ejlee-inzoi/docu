---
slug: "/Wiki/script-condition/Cond_IsCrafting"
---

# [Cond]_IsCrafting

Overview
==

* Checks whether the target is currently performing a crafting activity (e.g., painting, cooking, etc.).

Parameter
=========

| Parameter   | Description                                                |
|-------------|------------------------------------------------------------|
| BaseObject  | The object to check (is it currently engaged in crafting?) |
| Command     | IsCrafting                                                 |
| CompareType | Equal / NotEqual                                           |

Examples
========

| BaseObject          | Command     | CompareType | S1      | S2      |
|---------------------|-------------|-------------|---------|---------|
| Am I currently crafting? | Self        | IsCrafting | Equal   |         |
