# 📘 AppearanceEyebrow Data Guide

## 🧩 Struct: FB1AppearanceEyebrowTableRow

Defines an eyebrow appearance entry with mesh, texture mask, customization options, and age/gender-based remapping.

### Properties

- **Id** (`FName`): Unique identifier for the appearance entry.  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Icon used to represent this eyebrow style in the UI.  
- **DescTextId** (`FString`): Localization key for the appearance description. *(StringTableKey)*  
- **GenderType** (`EB1GenderType`): Gender for which this eyebrow appearance is valid.  
- **BodyAgeType** (`EB1BodyAgeType`): Body age group this appearance applies to.  
- **Mesh** (`TSoftObjectPtr<USkeletalMesh>`): Skeletal mesh for this eyebrow.  
- **bHiddenFromUI** (`bool`): If true, this appearance is hidden in the customization UI.  
- **PartsId** (`FName`): ID of the facial part this appearance corresponds to.  
- **MaskTexture** (`TSoftObjectPtr<UTexture>`): Texture mask used to apply the eyebrow shape and placement.  
- **TextureParameterName** (`FName`): Material parameter name to which the mask texture is applied.  
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Map of alternative appearance IDs for each gender. *(Foreign = "AppearanceEyebrow.Id")*  
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Map of alternative appearance IDs for each body age. *(Foreign = "AppearanceEyebrow.Id")*  
## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)