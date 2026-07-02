---
slug: "/Wiki/script-condition/Cond_HasEnoughCurrencyTarget"
---

# [Cond]_HasEnoughCurrencyTarget

Overview
==

* Checks whether there is enough currency to cover the sale price of the target.
* This refers to the user-specified SalePrice, not the object's base Price.

Parameter
=========

| Parameter  | Description                               |
|------------|-------------------------------------------|
| BaseObject | The object to check the condition for     |
| Command    | HasEnoughCurrencyTarget                   |
|            |                                           |

Examples
========

| Description                                  | BaseObject | Command                 | S1 | S2 |
|----------------------------------------------|------------|--------------------------|----|----|
| Do I have enough funds to cover the sale price? | Target     | HasEnoughCurrencyTarget  |    |    |
