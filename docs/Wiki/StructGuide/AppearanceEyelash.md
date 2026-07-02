# 📘 AppearanceEyelash Data Guide

## 🧩 Struct: FB1AppearanceEyelashTableRow

Defines an eyelash appearance entry with mesh, customization metadata, and gender/age-based remapping support.

### Properties

- **Id** (`FName`): Unique identifier for the appearance entry.  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Image shown in the UI for this eyelash option.  
- **DescTextId** (`FString`): Localization key for the description. *(StringTableKey)*  
- **GenderType** (`EB1GenderType`): Gender that this eyelash appearance is valid for.  
- **BodyAgeType** (`EB1BodyAgeType`): Age group that this eyelash appearance is valid for.  
- **Mesh** (`TSoftObjectPtr<USkeletalMesh>`): Skeletal mesh used for this eyelash appearance.  
- **bHiddenFromUI** (`bool`): If true, this appearance is hidden in UI.  
- **PartsId** (`FName`): Part ID used to identify or group this eyelash entry.  
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Alternate appearance IDs to use when gender changes. *(Foreign = "AppearanceEyelash.Id")*  
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Alternate appearance IDs to use when body age changes. *(Foreign = "AppearanceEyelash.Id")*  

## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)
