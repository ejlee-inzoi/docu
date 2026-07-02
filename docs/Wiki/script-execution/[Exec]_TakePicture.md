---
slug: "/Wiki/script-execution/Exec_TakePicture"
---

# [Exec]_TakePicture

Overview
==

* Triggers photo mode.  
* `BaseObject` must always be `Self` (the character taking the picture).

Details
==

| Parameter   | Description                                     |
|-------------|-------------------------------------------------|
| BaseObject  | Object to execute the command (must be Self)    |
| Command     | TakePicture                                     |
| S1          | Determines mode: `EB1BaseObject::Self` for selfie, `EB1BaseObject::Target` for regular photo |
| F1 / F2     | Not used                                         |
| Function    | Activates photo mode                            |

Examples
==

| Example         | BaseObject | Command     | S1                      | S2 | F1 | F2 | Prob |
|-----------------|------------|-------------|--------------------------|----|----|----|------|
| Take a selfie    | Self       | TakePicture | EB1BaseObject::Self      |    |    |    |      |
| Take a photo     | Self       | TakePicture | EB1BaseObject::Target    |    |    |    |      |
