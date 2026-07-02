---
slug: "/Wiki/script-condition/Cond_TemperatureRange"
---

# [Cond]_TemperatureRange

Overview
==

* Compares the current temperature range to determine the result.

Parameter
=========

|  | Description |
| --- | --- |
| BaseObject | The object to check the condition against |
| Command | TemperatureRange |
| CompareType | All (Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual) |
| S1 | Temperature range (EB1TemperatureRange) |
| S2 | - |
| F1 | - |
| F2 | - |

S1

* Freezing
* Cold
* Cool
* Mild
* Warm
* Burning
* Heatwave

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| When the temperature range is Cold | Self | TemperatureRange | Equal | Cold |  |  |  |
| When the temperature range is Warm or hotter | Self | TemperatureRange | GreaterOrEqual | Warm |  |  |  |
