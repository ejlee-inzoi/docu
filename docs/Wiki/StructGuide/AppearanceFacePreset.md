# 📘 AppearanceFacePreset Data Guide

## 🧩 Struct: FB1AppearanceFacePresetTableRow

Defines a preset face appearance entry, including mesh filters, gender/age targeting, and display configuration.

### Properties

- **Id** (`FName`): Unique identifier for this face preset entry.  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): UI preview image for the face preset. *(Category = UI)*  
- **DescTextId** (`FString`): Localization key for the description. *(StringTableKey)* *(Category = UI)*  
- **GenderType** (`EB1GenderType`): Gender that this face preset applies to.  
- **BodyAgeType** (`EB1BodyAgeType`): Body age group that this preset supports.  
- **SubCategories** (`TArray<FName>`): List of subcategories associated with this appearance. *(Foreign = "GarmentSubCategory.Id")*  
- **HiddenFromUI** (`bool`): If true, this face preset is hidden from the customization interface.  
- **Tags** (`TArray<FName>`): List of tags used for search or filtering in UI. *(Category = Tags)*  
## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)
