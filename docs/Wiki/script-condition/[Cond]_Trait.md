---
slug: "/Wiki/script-condition/Cond_Trait"
---

# [Cond]_Trait

Overview
==

* A condition command used to determine whether a character possesses a specific trait.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | The object to check the condition against |
| Command | Trait |
| CompareType | Equal, NotEqual |
| S1 | ID of the trait to check (from Trait.json) |

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| If I have the Bookworm trait | Self | Trait | Equal | Bookworm |  |  |  |
| If I do not have the Gloomy trait | Self | Trait | NotEqual | Gloomy |  |  |  |
| If the target has the Bookworm trait | Target | Trait | Equal | Bookworm |  |  |  |
| If the target does not have the Gloomy trait | Target | Trait | NotEqual | Gloomy |  |  |  |
