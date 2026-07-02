---
slug: "/Wiki/script-condition/Cond_CraftingPlaySuccessAnimation"
---

# [Cond]_CraftingPlaySuccessAnimation

Overview
==

- Determines whether to play the crafting success animation.

Parameters
==========

| Params      | Description                          |
|-------------|--------------------------------------|
| BaseObject  | Target object to check the condition |
| Command     | CraftingPlaySuccessAnimation         |
| CompareType | None                                 |
| S1          | True / False                         |

Examples
========

| Example                                           | BaseObject | Command                      | CompareType | S1    | S2 | F1 | F2 |
|---------------------------------------------------|------------|-------------------------------|-------------|-------|----|----|----|
| If the crafting success animation should play     | Self       | CraftingPlaySuccessAnimation  | None        | True  |    |    |    |
| If the crafting success animation should not play | Self       | CraftingPlaySuccessAnimation  | None        | False |    |    |    |
