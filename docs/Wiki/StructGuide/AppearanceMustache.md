# 📘 AppearanceMustache Data Guide

## 🧩 Struct: FB1AppearanceMustacheTableRow

Defines a mustache appearance entry for character customization, including mesh, filters, and dynamic remapping.

### Properties

- **Id** (`FName`): Unique identifier for this mustache appearance entry.  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Image used to preview the mustache in UI.  
- **DescTextId** (`FString`): Localization key for the description text. *(StringTableKey)*  
- **GenderType** (`EB1GenderType`): Gender this mustache style is valid for.  
- **BodyAgeType** (`EB1BodyAgeType`): Age group this mustache is designed for.  
- **SubCategories** (`TArray<FName>`): Subcategory tags for filtering in UI. *(Foreign = "GarmentSubCategory.Id")*  
- **Mesh** (`TSoftObjectPtr<USkeletalMesh>`): Skeletal mesh asset for the mustache.  
- **bHiddenFromUI** (`bool`): If true, this option is hidden from the customization UI.  
- **PartsId** (`FName`): Facial part ID this mustache is associated with.  
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Map of alternate appearance IDs for each gender. *(Foreign = "AppearanceMustache.Id")*  
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Map of alternate appearance IDs for each age group. *(Foreign = "AppearanceMustache.Id")*  


## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)
