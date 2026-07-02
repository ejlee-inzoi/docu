---
slug: "/Wiki/script-execution/Exec_RemoveEntityTag"
---

# [Exec]_RemoveEntityTag

Overview
==

* Removes a tag from an entity  
* Can only be executed at runtime

Details
==

| Parameter   | Description                                 |
|-------------|---------------------------------------------|
| BaseObject  | Object to execute the command               |
| Command     | RemoveEntityTag                             |
| S1          | Tag                                          |
| F1          | LifeTImeMinute (maximum 3 days)             |

Examples
==

| Example                        | BaseObject | Command          | S1  | S2 | F1 | F2 | Prob |
|--------------------------------|------------|------------------|-----|----|----|----|------|
| Remove the tag "QWE" from target | Target     | RemoveEntityTag  | QWE |    |    |    |      |
