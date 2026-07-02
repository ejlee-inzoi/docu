---
slug: "/Wiki/script-condition/Cond_HasTaxId"
---

# [Cond]_HasTaxId

Overview
==

* Checks whether the object is subject to utilities billing such as electricity or water.

Parameter
=========

| Parameter   | Description                                                   |
|-------------|---------------------------------------------------------------|
| BaseObject  | The object to check the condition for                         |
| Command     | HasTaxId                                                      |
| CompareType | Equal / NotEqual                                              |
| S1          | Utility type to check (e.g., Electricity, Water — from Object.TaxId) |

Examples
========

| Dialogue Text                        | [Condition] (8 types) |         |         |         |
|-------------------------------------|------------------------|---------|---------|---------|
| BaseObject                          | Command                | S1                      | S2     |
| Does the object use electricity or water? | Target                 | HasTaxId               | Electricity or Water |       |
