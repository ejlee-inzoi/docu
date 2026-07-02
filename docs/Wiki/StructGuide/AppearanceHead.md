# 📘 AppearanceHead Data Guide

## 🧩 Struct: FB1AppearanceHeadTableRow

Data for head mesh applied to the character.

### Properties

- **Id** (`FName`): Unique identifier for the head appearance entry.  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Preview image used in the customization UI. *(Category = UI)*  
- **DescTextId** (`FString`): Localization key for the description of this appearance. *(StringTableKey)* *(Category = UI)*  
- **GenderType** (`EB1GenderType`): Gender this head mesh supports.  
- **BodyAgeType** (`EB1BodyAgeType`): Age group this mesh applies to.  
- **SubCategories** (`TArray<FName>`): Subcategories used for UI filtering. *(Foreign = "GarmentSubCategory.Id")*  
- **Mesh** (`TSoftObjectPtr<USkeletalMesh>`): Skeletal mesh for the head model.  
- **FaceSkinColorId** (`FName`): Default skin color ID applied to body skin linked with this head. *(Foreign = "AppearanceSkinColor.Id")*  
- **EyebrowId** (`FName`): Default eyebrow ID linked with this head. *(Foreign = "AppearanceEyebrow.Id")*  
- **EyelashId** (`FName`): Default eyelash ID linked with this head. *(Foreign = "AppearanceEyelash.Id")*  
- **DefaultHairId** (`FName`): Default hair ID linked with this head.  
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Mapping ID based on gender for the head mesh. *(Foreign = "AppearanceHead.Id")*  
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Mapping ID based on body age for the head mesh. *(Foreign = "AppearanceHead.Id")*  
- **HiddenFromUI** (`bool`): Whether the head should be hidden from the character customization UI.  


## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)
