# 📘 MarketSelling Data Guide

## 🧩 Struct: FB1MarketSellingTableRow

Defines the selling window and pricing progression for market items.

### Properties

- **Id** (`FName`): Unique identifier for the market selling entry.  
- **StartSellTime** (`int32`): Game time when selling begins.  
- **EndSellTime** (`int32`): Game time when selling ends.  
- **SellTimeCount** (`int32`): Number of intervals within the sell duration.  
- **InitialSellPercentage** (`float`): Starting probability or ratio of the item being sold.  
- **SellPercentageToAdd** (`float`): Amount by which the sell probability increases each day.  
