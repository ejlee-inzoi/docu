---
slug: "/Wiki/script-condition/Cond_HasEnoughCurrencyExchangeCost"
---

# [Cond]_HasEnoughCurrencyExchangeCost

Overview
==

* Checks whether the object has enough resources to be exchanged.

Parameter
=========

| Params      | Description                             |
|-------------|-----------------------------------------|
| BaseObject  | The object to check the condition for   |
| Command     | HasEnoughCurrencyExchangeCost           |
| CompareType | Equal / NotEqual                        |

Examples
========

| Example                                      | BaseObject | Command                      | CompareType | S1 | S2 | F1 | F2 | Prob |
|----------------------------------------------|------------|-------------------------------|-------------|----|----|----|----|------|
| If the target object can be exchanged         | Target     | HasEnoughCurrencyExchangeCost | Equal       |    |    |    |    |      |
| If the target object cannot be exchanged      | Target     | HasEnoughCurrencyExchangeCost | NotEqual    |    |    |    |    |      |
| If the Self GameObject can be exchanged       | Self       | HasEnoughCurrencyExchangeCost | Equal       |    |    |    |    |      |
