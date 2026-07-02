---
slug: "/Wiki/script-execution/Exec_SpawnFakeObject"
---

# [Exec]_SpawnFakeObject

Overview
==

* Duplicates the target object and spawns it at the same location, applying a specified state.

Details
==

| Parameter   | Description                           |
|-------------|---------------------------------------|
| BaseObject  | Object to execute the command         |
| Command     | SpawnFakeObject                       |
| S1          | StateGroupId to apply                 |
| S2          | StateId to set                        |

Examples
==

| Example                                             | BaseObject | Command          | S1       | S2       | F1 | F2 | Prob |
|-----------------------------------------------------|------------|------------------|----------|----------|----|----|------|
| Duplicate the target, spawn it, and set its state   | Target     | SpawnFakeObject  | Soldout  | Soldout  |    |    |      |
