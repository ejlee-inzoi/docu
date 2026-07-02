---
slug: "/Wiki/script-execution/Exec_SetDoorPrivilege"
---

# [Exec]_SetDoorPrivilege

Overview
==

* Sets or clears the privilege for a character to bypass door access restrictions.

Details
==

| Parameter   | Description                                         |
|-------------|-----------------------------------------------------|
| BaseObject  | Object to execute the command                       |
| Command     | SetDoorPrivilege                                    |
| F1          | 0 = Remove privilege, any other value = Grant privilege (Boolean) |

Examples
==

| Example                                         | BaseObject | Command           | S1 | S2 | F1 | F2 | Prob |
|-------------------------------------------------|------------|--------------------|----|----|----|----|------|
| Grant door access bypass privilege to self      | Self       | SetDoorPrivilege   |    |    | 1  |    |      |
| Remove door access bypass privilege from self   | Self       | SetDoorPrivilege   |    |    | 0  |    |      |
