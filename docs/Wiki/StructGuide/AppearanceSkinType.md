# 📘 AppearanceSkinType Data Guide

## 🧩 Struct: FB1AppearanceSkinTableRow

Data for skin displayed in the character customization garment list.

### Properties

- **Id** (`FName`): Unique identifier for this skin entry.  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Image shown in the UI to preview the skin. *(Category = UI)*  
- **DescTextId** (`FString`): Localization key for the description text. *(StringTableKey)* *(Category = UI)*  
- **GenderType** (`EB1GenderType`): Gender this skin preset applies to.  
- **BodyAgeType** (`EB1BodyAgeType`): Age group this skin preset is compatible with.  
- **SubCategories** (`TArray<FName>`): Subcategories used to organize this skin preset. *(Foreign = "GarmentSubCategory.Id")*  
- **HeadOverrideMaterial** (`TArray<TSoftObjectPtr<UMaterialInterface>>`): Material for customizing the head skin. Overrides the default head material when applying a new skin.
- **BodyOverrideMaterial** (`TSoftObjectPtr<UMaterialInterface>`): Material for customizing the body skin. Overrides the default body material when applying a new skin.  
- **DefaultSkinColorId** (`FName`): Default skin color ID used for the character's skin tone. *(Foreign = "AppearanceSkinColor.Id")*  
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Matching ID based on gender for the skin. *(Foreign = "AppearanceSkinType.Id")*  
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Matching ID based on body age for the skin. *(Foreign = "AppearanceSkinType.Id")*  
- **HiddenFromUI** (`bool`): Whether the skin should be hidden from the character customization UI.
- **ShowColorChangeButton** (`bool`): Whether a color change button for skin color should be shown in the UI.


## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)
