# 📘 Quality Data Guide

## 🧩 Struct: FB1QualityTableRow

Defines quality settings for crafting or item output, including dynamic weights and level handling.

### Properties

- **Id** (`FName`): Unique identifier for the quality definition.  
- **MarketSellingDataId** (`FName`): Reference to a market selling rule. *(Foreign = "MarketSelling.Id")*  
- **NonMaxLevelQualityId** (`FName`): ID used when the item is not at max crafting level. *(Foreign = "LevelQuality.Id")*  
- **MaxLevelQualityId** (`FName`): ID used when item is crafted at max level. *(Foreign = "LevelQuality.Id")*  
- **QualityDatas** (`TArray<FB1QualityData>`): Quality configurations such as state, animation, price and more.


## 📚 References

- [FB1QualityData](./Struct/FB1QualityData.md)
