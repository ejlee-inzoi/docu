# 📘 AppearanceScar Data Guide

## 🧩 Struct: FB1AppearanceScarTableRow

Data for the scar displayed in the character customization skin feature list.

### Properties

- **Id** (`FName`): Unique identifier for the skin feature.  
- **DescTextId** (`FString`): Localized description for the skin feature, displayed in the character customization UI. *(StringTableKey = "Id")*  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Thumbnail image representing the skin feature, displayed in the customization UI. 
- **MaskTexture** (`TSoftObjectPtr<UTexture>`): Mask texture used to define the area affected by the skin feature.  
- **PartsNum** (`int32`): Number of colors used in the skin feature.  
- **HiddenFromUI** (`bool`): Whether the skin feature should be hidden from the character customization UI.  
- **ColorTexture** (`TSoftObjectPtr<UTexture>`): Texture used to color the scar.
- **DefaultScarRoughness** (`float`): Default roughness value applied to the scar material.  
- **DefaultScarMetalRoughness** (`float`): Default metal roughness value applied to the scar material.  
- **IsTopmostScar** (`float`): Whether this scar is unaffected by skin color changes.  
- **GenderType** (`EB1GenderType`): Specifies the gender in which this scar appears in the character customization skin feature list.
- **BodyAgeType** (`EB1BodyAgeType`): Specifies the body age in which this scar appears in the character customization skin feature list.
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Matching ID based on gender for the scar. *(Foreign = "AppearanceScar.Id")*  
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Matching ID based on body age for the scar. *(Foreign = "AppearanceScar.Id")*  


## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)