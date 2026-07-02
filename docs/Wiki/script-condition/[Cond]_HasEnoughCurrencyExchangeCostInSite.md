---
slug: "/Wiki/script-condition/Cond_HasEnoughCurrencyExchangeCostInSite"
---

# [Cond]_HasEnoughCurrencyExchangeCostInSite

Overview
==

* Checks whether there is enough currency to replace all objects in the same Site as the Target object that share the same state (e.g., Broken, Fire).

Parameter
=========

| Params      | Description                                 |
|-------------|---------------------------------------------|
| BaseObject  | Target (GameObject)                         |
| Command     | HasEnoughCurrencyExchangeCostInSite         |
| CompareType | Type of comparison (Equal / NotEqual)       |

Examples
========

| Example                                                   | BaseObject | Command                             | CompareType | S1 | S2 | F1 | F2 | Prob |
|-----------------------------------------------------------|------------|--------------------------------------|-------------|----|----|----|----|------|
| If there is enough currency to replace all such objects   | Target     | HasEnoughCurrencyExchangeCostInSite | Equal       |    |    |    |    |      |
| If there is not enough currency to replace all such objects | Target   | HasEnoughCurrencyExchangeCostInSite | NotEqual    |    |    |    |    |      |
