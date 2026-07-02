# 📘 PocketMarketShoppingDiscount Data Guide

## 🧩 Struct: FB1PocketMarketShoppingDiscountTableRow

Defines conditional discount rules for Pocket Market categories.

### Properties

- **Id** (`FName`): Unique identifier for the discount rule.  
- **ConditionId** (`FName`): Condition that enables this discount. *(Foreign = "StoreCondition.Id")*  
- **Discounts** (`TArray<FB1PocketMarketShoppingDiscountData>`): Discount rate entries based on item count or usage.  


## 📚 References

- [FB1PocketMarketShoppingDiscountData](./Struct/FB1PocketMarketShoppingDiscountData.md)