---
slug: "/Wiki/script-condition/Cond_InteractionTag"
---

# [Cond]_InteractionTag

Overview
==

* Checks whether the avatar's current interaction is included in a specific `InteractionTag`.

Parameter
=========

| Params      | Description                               |
|-------------|-------------------------------------------|
| BaseObject  | The object to check the condition for      |
| Command     | InteractionTag                            |
| CompareType | Type of comparison                        |
| S1          | InteractionTag to compare                 |
|             |                                           |

Examples
========

| Example Description                                                                        | BaseObject | Command        | CompareType | S1               | S2 | F1 | F2 |
|--------------------------------------------------------------------------------------------|------------|----------------|-------------|------------------|----|----|----|
| If my current interaction is included in the InteractionTag `Trait_Free_Nap`              | Self       | InteractionTag | Equal       | Trait_Free_Nap   |    |    |    |
| If my current interaction is NOT included in the InteractionTag `Piano`                   | Self       | InteractionTag | NotEqual    | Piano            |    |    |    |
