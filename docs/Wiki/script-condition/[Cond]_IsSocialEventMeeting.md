---
slug: "/Wiki/script-condition/Cond_IsSocialEventMeeting"
---

# [Cond]_IsSocialEventMeeting

Overview
==

* Checks whether `Self` and `Target` have **met during the same social event**.  
* A “meeting” is defined as having initiated at least one **interaction** (dialogue or cooperative action) during the event.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | Not used                                 |
| Command     | IsSocialEventMeeting                     |
| CompareType | Type of comparison                       |

Examples
========

| Example Description                                           | BaseObject | Command               | CompareType | S1 | S2 | F1 | F2 | Prob |
|---------------------------------------------------------------|------------|------------------------|-------------|----|----|----|----|-------|
| If Self and Target have met during the same social event      | Self       | IsSocialEventMeeting   | Equal       |    |    |    |    |       |
