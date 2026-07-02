---
slug: "/Wiki/script-execution/Exec_SetCraftObjectVisibility"
---

# [Exec]_SetCraftObjectVisibility

Overview
==

* Controls the visibility of a Crafting GameObject currently being crafted by the character.

Details
==

| Parameter   | Description                           |
|-------------|---------------------------------------|
| BaseObject  | Object to execute the command         |
| Command     | SetCraftObjectVisibility              |
| S1          | Visibility flag (true / false)        |

Examples
==

| Example                                                                  | BaseObject | Command                  | S1    | S2 | F1 | F2 | Prob |
|--------------------------------------------------------------------------|------------|---------------------------|-------|----|----|----|------|
| Hide the currently crafting item via interaction                        | Self       | SetCraftObjectVisibility  | false |    |    |    |      |
