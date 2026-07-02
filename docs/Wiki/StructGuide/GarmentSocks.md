# 📘 GarmentSocks Data Guide

## 🧩 Struct: FB1GarmentSocksTableRow

Data for socks displayed in the character customization garment list.  
Supports customization, color channel control, outfit tagging, and associated buff logic.

### Properties

- **Id** (`FName`): Unique identifier for this garment.  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Image used to preview the garment in the customization UI. *(Category = UI)*  
- **DescTextId** (`FString`): Localization key for the description shown in the UI. *(StringTableKey)*  
- **GenderType** (`EB1GenderType`): Gender this garment is intended for.  
- **BodyAgeType** (`EB1BodyAgeType`): Body age group this garment supports.  
- **SubCategories** (`TArray<FName>`): Tags used to categorize the garment in UI filters. *(Foreign = "GarmentSubCategory.Id")*  
- **bCustomizable** (`bool`): If true, the garment supports customization. 
- **NumColorChannels** (`int32`): Number of color channels available for customization.  
- **AITextureChannels** (`int32`): Number of channels that support AI-generated textures.  
- **Variants** (`TArray<FName>`): List of mesh or design variant IDs for this garment.  
- **HiddenFromUI** (`bool`): If true, this garment is hidden from the customization interface. *(Category = UI)*  
- **VariantGroups** (`TArray<FB1GarmentVariantGroup>`): Groups of design variants grouped by context for customizable garment.  
- **PartsGroup** (`TArray<FB1GarmentPartsGroup>`): Parts data that defines mesh components for customizable garment.  
- **OutfitCategoryTags** (`TArray<EB1OutfitCategory>`): Tags used to categorize this garment within outfit sets.  
- **OutfitBuffList** (`TArray<FName>`): List of buffs that apply when wearing this garment. *(Foreign = "Buff.Id")*  


## 📚 References

- [FB1GarmentVariantGroup](./Struct/FB1GarmentVariantGroup.md)
- [FB1GarmentVariantInfo](./Struct/FB1GarmentVariantInfo.md)
- [FB1GarmentPartsGroup](./Struct/FB1GarmentPartsGroup.md)
- [FB1GarmentPartsInfo](./Struct/FB1GarmentPartsInfo.md)
- [EB1OutfitCategory](./Enum/EB1OutfitCategory.md)
- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)