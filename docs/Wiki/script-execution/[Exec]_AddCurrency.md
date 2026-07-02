---
slug: "/Wiki/script-execution/Exec_AddCurrency"
---

# [Exec]_AddCurrency

Overview
==

* Adds or subtracts currency.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to display the gold gain/loss effect. (Even if set to Target, it does not change the target's currency.) |
| Command | AddCurrency |
| S1 | Currency Data Table ID (=CurrencyType) |
| F1 | Amount of currency to add or subtract |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Add 1000 Mew to myself | Self | AddCurrency | Mew |  | 1000 |  |  |
| Spend 500 Mew from myself | Self | AddCurrency | Mew |  | -500 |  |  |
