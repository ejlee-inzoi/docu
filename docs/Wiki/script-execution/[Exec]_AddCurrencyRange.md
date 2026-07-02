---
slug: "/Wiki/script-execution/Exec_AddCurrencyRange"
---

# [Exec]_AddCurrencyRange

Overview
==

* Increases currency by a random value within the F1–F2 range.  
* By policy, random currency rewards are allowed for increases only (negative values are not permitted; validation is in progress).

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to display the gold gain effect. (Even if set to Target, it does not increase the target’s currency.) |
| Command | AddCurrencyRange |
| S1 | Currency Data Table ID (=CurrencyType) |
| F1 | Minimum amount to increase (negative values not allowed) |
| F2 | Maximum amount to increase (negative values not allowed) |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Add a random amount of Mew between 1000 and 2000 to myself | Self | AddCurrencyRange | Mew |  | 1000 | 2000 |  |
| Add a random amount of Nyang between 500 and 1000 to myself | Self | AddCurrencyRange | Nyang |  | 500 | 1000 |  |
