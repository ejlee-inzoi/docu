---
slug: "/Wiki/script-condition/Cond_CheckSuccessByPriceValue폐기"
---

# [Cond]_CheckSuccessByPriceValue (Deprecated)

Overview
==

- Based on the object's price, a virtual minimum/maximum value is calculated using `PriceValueMinRate` / `PriceValueMaxRate` set in `DA_State`.  
- A random value is selected within that range, and success/failure is determined by comparing it with `F1`.

Parameters
==========

| Parameter   | Description                             |
|-------------|-----------------------------------------|
| BaseObject  | Target object to check the condition    |
| Command     | CheckSuccessByPriceValue                |
| F1          | Threshold value (e.g., 1.0 = 100%)      |

Examples
========

| Description                         | BaseObject | Command                 | CompareType  | F1   |
|-------------------------------------|------------|--------------------------|--------------|------|
| Is the object discounted by at least 15%? | Self       | CheckSuccessByPriceValue | LessOrEqual  | 0.85 |
