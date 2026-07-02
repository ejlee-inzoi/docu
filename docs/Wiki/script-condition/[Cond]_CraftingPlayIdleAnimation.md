---
slug: "/Wiki/script-condition/Cond_CraftingPlayIdleAnimation"
---

# [Cond]_CraftingPlayIdleAnimation

Overview
==

- Determines whether to play an idle animation.

Parameters
==========

| Params      | Description                          |
|-------------|--------------------------------------|
| BaseObject  | Target object to check the condition |
| Command     | CraftingPlayIdleAnimation            |
| CompareType | None                                 |
| S1          | True / False                         |

Examples
========

| Example                              | BaseObject | Command                  | CompareType | S1    | S2 | F1 | F2 |
|--------------------------------------|------------|---------------------------|-------------|-------|----|----|----|
| If idle animation should play        | Self       | CraftingPlayIdleAnimation | None        | True  |    |    |    |
| If idle animation should not play    | Self       | CraftingPlayIdleAnimation | None        | False |    |    |    |
