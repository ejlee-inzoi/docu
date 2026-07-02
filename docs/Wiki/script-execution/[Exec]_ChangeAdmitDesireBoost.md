---
slug: "/Wiki/script-execution/Exec_ChangeAdmitDesireBoost"
---

# [Exec]_ChangeAdmitDesireBoost

Overview
==

* Changes the boost level of the "Admit" (recognition) desire.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | ChangeAdmitDesireBoost |
| S1 | Emotional temperament to apply the boost to |
| F1 | Boost level |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Apply a level 1 positive emotion buff to the Admit desire | Self | ChangeAdmitDesireBoost | Positive |  | 1 |  |  |
| Apply a level 2 negative emotion buff to the Admit desire | Self | ChangeAdmitDesireBoost | Negative |  | 2 |  |  |

Accepted values for S1
==========

| Id | Description |
| --- | --- |
| Natural | Neutral (default) |
| Positive | Positive |
| Negative | Negative |
