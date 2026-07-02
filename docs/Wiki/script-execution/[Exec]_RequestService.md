---
slug: "/Wiki/script-execution/Exec_RequestService"
---

# [Exec]_RequestService

Overview
==

* Requests a service corresponding to the specified Service ID  
* Service definitions are found in Service.json

Details
==

| Parameter   | Description                   |
|-------------|-------------------------------|
| BaseObject  | Object to execute the command |
| Command     | RequestService                |
| S1          | Service ID                    |
| S2          | -                             |
| F1          | -                             |
| F2          | -                             |

Examples
==

| Example                      | BaseObject | Command         | S1              | S2 | F1 | F2 | Prob |
|------------------------------|------------|------------------|------------------|----|----|----|------|
| Request fire extinguishing service | Self       | RequestService  | Fire_Extinguish |    |    |    | 1.0  |
