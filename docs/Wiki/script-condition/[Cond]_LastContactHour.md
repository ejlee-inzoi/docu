---
slug: "/Wiki/script-condition/Cond_LastContactHour"
---

# [Cond]_LastContactHour

Overview
==

* Compares how many hours have passed since the **last contact** (conversation or text) between `Self` and `Target`, based on the current in-game time.  
* If no contact has ever occurred, the condition returns **false**.

Parameter
=========

| Params      | Description                                                  |
|-------------|--------------------------------------------------------------|
| BaseObject  | Not meaningful (Self and Target share the same last contact) |
| Command     | LastContactHour                                              |
| CompareType | Type of comparison                                           |
| F1          | Hours since last contact (must be greater than 0)            |

Examples
========

| Example Description                                           | BaseObject | Command         | CompareType | S1 | S2 | F1 | F2 | Prob |
|---------------------------------------------------------------|------------|------------------|-------------|----|----|----|----|-------|
| If more than 12 hours have passed since Self and Target last contacted | Self       | LastContactHour | Greater     |    |    | 12 |    |       |
| If Self and Target contacted each other within the last 8 hours         | Self       | LastContactHour | Less        |    |    | 8  |    |       |
