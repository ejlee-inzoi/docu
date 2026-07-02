# 📘 AppearanceBeard Data Guide

## 🧩 Struct: FB1AppearanceBeardTableRow

Defines a beard mesh appearance entry with display settings, gender/age filters, and remapping for UI and customization.

### Properties

- **Id** (`FName`): Unique identifier for the appearance entry.  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Image shown in the UI for this appearance option. *(Category = UI)*  
- **DescTextId** (`FString`): Localization key for the description of this appearance. *(StringTableKey)* *(Category = UI)*  
- **GenderType** (`EB1GenderType`): Gender that this appearance is valid for (e.g., Male, Female).  
- **BodyAgeType** (`EB1BodyAgeType`): Body age group that this appearance is valid for.  
- **SubCategories** (`TArray<FName>`): List of subcategory IDs used to filter this appearance in UI. *(Foreign = "GarmentSubCategory.Id")*  
- **Mesh** (`TSoftObjectPtr<USkeletalMesh>`): Skeletal mesh asset used for this beard appearance.  
- **bHiddenFromUI** (`bool`): If true, this appearance is hidden from UI menus.  
- **PartsId** (`FName`): Part ID associated with this beard (e.g., for logic grouping or replacement).  
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Map of alternate appearance IDs to use when gender is changed. *(Foreign = "AppearanceBeard.Id")*  
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Map of alternate appearance IDs to use when body age changes. *(Foreign = "AppearanceBeard.Id")*  

## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)