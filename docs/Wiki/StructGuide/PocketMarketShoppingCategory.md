# 📘 PocketMarketShoppingCategory Data Guide

## 🧩 Struct: FB1PocketMarketShoppingCategoryTableRow

Defines a shopping category in the Pocket Market system, including discount links and visual UI data.

### Properties

- **Id** (`FName`): Unique identifier for this category.  
- **DiscountId** (`FName`): Discount rule applied to items in this category. *(Foreign = "PocketMarketShoppingDiscount.Id")*  
- **TitleTextId** (`FString`): Main category name in the UI. *(StringTableKey = "Id")*  
- **SubTitleTextId** (`FString`): Optional subtitle text shown in UI. *(StringTableKey = "Id")*  
- **ItemSubTitleTextId** (`FString`): Subtitle text applied to each item in the category. *(StringTableKey)*  
- **Icon** (`TSoftObjectPtr<UObject>`): Icon shown for this category in the UI. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **TabType** (`EB1PocketMarketTabType`): Tab type this category appears under.  
- **ItemDatas** (`TArray<FB1PocketMarketShoppingItemData>`): List of items sold in this category.  


## 📚 References

- [FB1PocketMarketShoppingItemData](./Struct/FB1PocketMarketShoppingItemData.md)
- [EB1CarriableObjectType](./Enum/EB1CarriableObjectType.md)
- [EB1PocketMarketTabType](./Enum/EB1PocketMarketTabType.md)