---
slug: "/Wiki/script-execution/Exec_ProfileUnlock"
---

# [Exec]_ProfileUnlock

Overview
==

* Unlocks specific information about a Joy in the Joy Profile.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object (Joy) on which to execute the command |
| Command | ProfileUnlock |
| S1 | EB1RelationshipProfileType |
| S2 | - |
| F1 | - |
| F2 | - |

S1 Options

* Gender  
* Aging  
* Marriage  
* Trait  
* Job  
* TraitValue  
* Preference  
* RomanticOrientation  
* RomanceTarget

Example
==

| Dialogue Text | [Executes] (8 types) | | | | | | |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ask about traits | Target | ProfileUnlock | Trait |  |  |  | 1.0 |
| Ask about job | Target | ProfileUnlock | Job |  |  |  | 1.0 |
| Ask about marital status | Target | ProfileUnlock | Marriage |  |  |  | 1.0 |
| Ask about values | Target | ProfileUnlock | TraitValue |  |  |  | 1.0 |
| Ask about preferences | Target | ProfileUnlock | Preference |  |  |  | 1.0 |
| Ask about romantic orientation | Target | ProfileUnlock | RomanticOrientation |  |  |  | 1.0 |
| Ask about romantic interest | Target | ProfileUnlock | RomanceTarget |  |  |  | 1.0 |
