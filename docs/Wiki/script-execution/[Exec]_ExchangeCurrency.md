---
slug: "/Wiki/script-execution/Exec_ExchangeCurrency"
---

# [Exec]_ExchangeCurrency

Overview
==

* Facilitates a currency exchange within the range of F1 to F2.  
* Will not execute if either Self or Target is missing.  
* Will not execute if Self and Target are the same.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | Determines the payer in the exchange:  
  * If BaseObject is Self → payer = Self, payee = Target  
  * If BaseObject is Target → payer = Target, payee = Self |
| Command | ExchangeCurrency |
| S1 | Currency Data Table ID (= CurrencyType) |
| F1 | Minimum currency amount |
| F2 | Maximum currency amount |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Transfer between 1000 and 2000 Mew from Self to Target | Self | ExchangeCurrency | Mew |  | 1000 | 2000 |  |
| Transfer between 500 and 1000 Nyang from Target to Self | Target | ExchangeCurrency | Nyang |  | 500 | 1000 |  |
