## 🧩 Struct: FB1PocketMarketShoppingItemData

Defines a purchasable item or service in the pocket market, including display info and conditions.

### Properties

- **Id** (`FName`): ID of the item or service.  
  *(ModTip = "If it is Service, References Service Json File. Otherwise, References Object Json File.")*  
- **bIsService** (`bool`): If true, this entry refers to a service; otherwise, it's an object.  
- **CarriableObjectType** (`EB1CarriableObjectType`): Type of carriable object this entry represents.  
- **ServicePrice** (`int64`): Price for the service (if applicable).  
- **GiftBoxObjectId** (`FName`): ID of the gift box used to wrap this item. *(Foreign = "Object.Id")*  
- **ConditionId** (`FName`): ID of the condition data specifying the start and end times of an item's availability for sale. *(Foreign = "StoreCondition.Id")*  
- **OverrideTextId** (`FString`): Optional localized name override. *(StringTableKey)*  
- **OverrideIcon** (`TSoftObjectPtr<UObject>`): Optional icon override for this item. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **Count** (`int32`): Specifies the number of physical items to be delivered. Does not apply to services.  

## 📚 References

- [EB1CarriableObjectType](../Enum/EB1CarriableObjectType.md)
- [Object](../Object.md)
- [StoreCondition](../StoreCondition.md)