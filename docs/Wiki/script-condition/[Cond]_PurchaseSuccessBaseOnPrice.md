---
slug: "/Wiki/script-condition/Cond_PurchaseSuccessBaseOnPrice"
---

# [Cond]_PurchaseSuccessBaseOnPrice

Overview
==

* Determines whether a purchase is successful based on the object's `Price`.  
* When the offered price equals the base price, success chance starts at **50%**.  
* If the price is closer to the **minimum ratio** (`F1`), the chance approaches **100%**.  
* If the price is closer to the **maximum ratio** (`F2`), the chance approaches **0%**.

**Example Scenario:**
- Object price = 100  
- `F1` = 0.5 → minimum price = 50  
- `F2` = 1.5 → maximum price = 150  
- If the player offers 50, the success rate is 100%;  
  if 150, success rate is 0%;  
  at 100, it's 50%.

Parameter
=========

| Parameter   | Description                                 |
|-------------|---------------------------------------------|
| BaseObject  | The object to check                         |
| Command     | PurchaseSuccessBaseOnPrice                  |
| F1          | Minimum price ratio (e.g., 0.5)             |
| F2          | Maximum price ratio (e.g., 1.5)             |

Examples
========

| Description                    | BaseObject | Command                   | CompareType | F1  | F2  |
|--------------------------------|------------|----------------------------|-------------|-----|-----|
| Check if the purchase attempt is successful | Self       | PurchaseSuccessBaseOnPrice | Equal       | 0.5 | 1.5 |
