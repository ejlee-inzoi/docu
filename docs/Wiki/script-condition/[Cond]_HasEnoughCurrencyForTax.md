---
slug: "/Wiki/script-condition/Cond_HasEnoughCurrencyForTax"
---

# [Cond]_HasEnoughCurrencyForTax

Overview
==

* Checks whether the object has enough currency to pay the imposed tax.

Parameter
=========

| Parameter  | Description                                               |
|------------|-----------------------------------------------------------|
| BaseObject | The object to check the condition for                     |
| Command    | HasEnoughCurrencyForTax                                   |
| S1         | Currency type (currently only "Mew" is supported, refer to Currency table) |

Examples
========

| Description                 | BaseObject | Command                | S1  | S2 |
|-----------------------------|------------|-------------------------|-----|----|
| Do I have enough money to pay the tax? | Self       | HasEnoughCurrencyForTax | Mew |    |
