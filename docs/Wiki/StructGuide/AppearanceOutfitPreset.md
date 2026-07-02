# 📘 AppearanceOutfitPreset Data Guide

## 🧩 Struct: FB1AppearanceOutfitPresetTableRow

Defines a preset outfit configuration, including body filters, garment IDs, accessories, and customization tags.

### Properties

- **Id** (`FName`): Unique identifier for this outfit preset entry.  
- **GenderType** (`EB1GenderType`): Gender this outfit applies to. *(Category = Body)*  
- **Age** (`int32`): Approximate age value associated with this preset. *(ClampMin = 0)* *(Category = Body)*  
- **FullId** (`FName`): ID of the full-body garment mesh. *(Foreign = "GarmentFullMesh.Id")* *(Category = Cloth)*  
- **TopId** (`FName`): ID of the top garment mesh. *(Foreign = "GarmentTopMesh.Id")* *(Category = Cloth)*  
- **BottomId** (`FName`): ID of the bottom garment mesh. *(Foreign = "GarmentBottomMesh.Id")* *(Category = Cloth)*  
- **JacketId** (`FName`): ID of the jacket mesh. *(Foreign = "GarmentJacketMesh.Id")* *(Category = Cloth)*  
- **SocksId** (`FName`): ID of the socks mesh. *(Foreign = "GarmentSocksMesh.Id")* *(Category = Cloth)*  
- **StockingsId** (`FName`): ID of the stockings variant. *(Foreign = "GarmentStockingsVariants.Id")* *(Category = Cloth)*  
- **ShoesId** (`FName`): ID of the shoes mesh. *(Foreign = "GarmentShoesMesh.Id")* *(Category = Cloth)*  
- **HatId** (`FName`): ID of the hat mesh. *(Foreign = "GarmentHatMesh.Id")* *(Category = Cloth)*  
- **InnerUnderId** (`FName`): ID of the inner undergarment. *(Foreign = "GarmentInnerUnderMesh.Id")* *(Category = Cloth)*  
- **InnerTopId** (`FName`): ID of the inner top garment. *(Foreign = "GarmentInnerTopMesh.Id")* *(Category = Cloth)*  
- **Accessories** (`TMap<FName, FName>`): Map of accessory part IDs to selected accessory entries. *(Category = Accessory)*  
- **AgingConditionFlags** (`int32`): Bitmask indicating which growth stages this preset supports. *(BitmaskEnum = EB1GrowthStep)* *(Category = Tags)*  
- **CityTags** (`TArray<EB1DiversityCity>`): List of cities or diversity regions where this outfit is used. *(Category = Tags)*  
- **bFilterCrowdRandomPick** (`bool`): If true, this outfit is excluded from random crowd assignments.  
- **OutfitCategoryTags** (`TArray<EB1OutfitCategory>`): Tags indicating the categories this preset belongs to. *(Category = Tags)*  


## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1DiversityCity](./Enum/EB1DiversityCity.md)
- [EB1OutfitCategory](./Enum/EB1OutfitCategory.md)