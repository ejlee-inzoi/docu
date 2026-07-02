# 📘 AppearanceHair Data Guide

## 🧩 Struct: FB1AppearanceHairTableRow

Data for hair displayed in the character customization hair list.

### Properties

- **Id** (`FName`): Unique identifier for this hair entry.  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): UI preview image for this hairstyle. *(Category = UI)*  
- **DescTextId** (`FString`): Localization key for the description. *(StringTableKey)* *(Category = UI)*  
- **GenderType** (`EB1GenderType`): Gender this hairstyle is valid for.  
- **BodyAgeType** (`EB1BodyAgeType`): Age group this hairstyle supports.  
- **SubCategories** (`TArray<FName>`): List of appearance subcategories for filtering. *(Foreign = "GarmentSubCategory.Id")*  
- **PartsId** (`FName`): Identifier used to group hair customization options. Determines which scalar parameters appear as sliders in the customization UI. *(Foreign = "AppearanceParts.Id")*  
- **HairType** (`EB1HairType`): Hair type used to determine inherited hairstyle traits from parents to children.  
- **HiddenFromUI** (`bool`): Whether to hide this hair style from the character customization hair list.  
- **Tags** (`TArray<FName>`): Used to filter hair list items based on hair length subcategories.
- **Variants** (`TArray<FName>`): List of variant IDs that belong to this hair style. *(Foreign = "AppearanceHairMesh.Id")*  

## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)
- [EB1HairType](./Enum/EB1HairType.md)