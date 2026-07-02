---
slug: "/Wiki/script-condition/Cond_IsCharacterRole"
---

# [Cond]_IsCharacterRole

Overview
==

* Compares the role assigned to a character from the crowd appearance preset pool.  
* Only NPCs with special, non-player-controllable roles are assigned a role.

Parameter
=========

| Params      | Description                                               |
|-------------|-----------------------------------------------------------|
| BaseObject  | The object to check the condition for                     |
| Command     | IsCharacterRole                                           |
| CompareType | Equal / NotEqual                                          |
| S1          | Role to compare against:<br>• Invalid – player-controllable<br>• Police<br>• FireFighter |

Examples
========

| Example Description                                | BaseObject | Command         | CompareType | S1          | S2 | F1 | F2 |
|----------------------------------------------------|------------|------------------|-------------|-------------|----|----|----|
| If my Role is Police                               | Self       | IsCharacterRole  | Equal       | Police      |    |    |    |
| If my Role is not FireFighter                      | Self       | IsCharacterRole  | NotEqual    | FireFighter |    |    |    |
