---
slug: "/Wiki/script-condition/Cond_HasPreference"
---

# [Cond]_HasPreference

Overview
==

* Checks whether the character has a specific preference.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | HasPreference                            |
| CompareType | Type of comparison                        |
| S1          | Preference ID                            |
|             |                                          |

Examples
========

| Example Description                            | BaseObject | Command       | CompareType | S1       | S2 | F1 | F2 |
|------------------------------------------------|------------|----------------|-------------|----------|----|----|----|
| If I have the "Dancing" preference             | Self       | HasPreference  | Equal       | Dancing  |    |    |    |
| If I do NOT have the "Dancing" preference      | Self       | HasPreference  | NotEqual    | Dancing  |    |    |    |
| If I have the "Cooking" preference             | Self       | HasPreference  | Equal       | Cooking  |    |    |    |
