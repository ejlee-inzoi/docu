# 📘 AttachedAccessory Data Guide

## 🧩 Struct: FB1AttachedAccessoryTableRow

Data for accessories attached to the character's bone, displayed in the character customization accessory list.

### Properties

- **Id** (`FName`): Unique identifier for this accessory.  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): UI preview image for the accessory. *(Category = UI)*  
- **DescTextId** (`FString`): Localization key for the accessory’s description. *(StringTableKey)* *(Category = UI)*  
- **GenderType** (`EB1GenderType`): Gender this accessory is available for.  
- **BodyAgeType** (`EB1BodyAgeType`): Body age group that this accessory applies to.  
- **SubCategories** (`TArray<FName>`): Subcategory filters used in UI. *(Foreign = "GarmentSubCategory.Id")*  
- **AccessoryType** (`FName`): Type of the attached accessory (e.g., glasses, earrings).  
- **HiddenFromUI** (`bool`): Whether the accessory is hidden in the character customization accessory list. *(Category = UI)*  
- **Variants** (`TArray<FName>`): List of mesh ID variants for the attached accessory, each of which can be equipped on the character. *(Foreign = "AttachedAccessoryMesh.Id")*  
- **MaterialSectionGroups** (`TArray<FB1AccessoryMaterialSectionGroup>`): Groups of material sections for customizing the accessory's materials.  
- **OutfitCategoryTags** (`TArray<EB1OutfitCategory>`): Tags used to filter accessories by outfit category in the character customization accessory list. *(Foreign = "DataFilter.TagList")*  
- **OutfitBuffList** (`TArray<FName>`): In-game buffs applied to the character when the accessory is worn. *(Foreign = "Buff.Id")*  


## 📚 References

- [FB1AccessoryMaterialSectionGroup](./Struct/FB1AccessoryMaterialSectionGroup.md)
- [FB1AttachedAccessoryChannelData](./Struct/FB1AttachedAccessoryChannelData.md)
- [EB1AccessoryMaterialType](./Enum/EB1AccessoryMaterialType.md)
- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)
- [EB1OutfitCategory](./Enum/EB1OutfitCategory.md)
