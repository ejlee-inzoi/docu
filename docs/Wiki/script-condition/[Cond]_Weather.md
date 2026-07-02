---
slug: "/Wiki/script-condition/Cond_Weather"
---

# [Cond]_Weather

Overview
==

* Checks the current weather condition.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | The object to check the condition against |
| Command | Weather |
| CompareType | Comparison operator type (Equal, NotEqual) |
| S1 | Weather type (`EB1WeatherType`) |
| S2 | - |
| F1 | Weather intensity level. If set to 0, only the weather type (S1) is compared |
| F2 | - |

S1

* Sun
* Cloud
* Rain
* Snow

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| When the weather is Cloud level 1 | Self | Weather | Equal | Cloud |  | 1 |  |
| When the weather is Sunny | Self | Weather | Equal | Sun |  | 0 |  |
