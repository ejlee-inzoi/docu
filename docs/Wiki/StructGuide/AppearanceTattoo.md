# 📘 AppearanceTattoo Data Guide

## 🧩 Struct: FB1AppearanceTattooTableRow

Data for the face art displayed in the character customization skin feature list.

### Properties

- **Id** (`FName`): Unique identifier for the skin feature.  
- **DescTextId** (`FString`): Localized description for the skin feature, displayed in the character customization UI. *(StringTableKey = "Id")*  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Thumbnail image representing the skin feature, displayed in the customization UI. 
- **MaskTexture** (`TSoftObjectPtr<UTexture>`): Mask texture used to define the area affected by the skin feature.  
- **PartsNum** (`int32`): Number of colors used in the skin feature.  
- **HiddenFromUI** (`bool`): Whether the skin feature should be hidden from the character customization UI.  
- **DefaultTattooColor1** (`FString`): Default tattoo color 1 in hexadecimal RGB format.  
- **DefaultTattooColor2** (`FString`): Default tattoo color 2 in hexadecimal RGB format.  
- **DefaultTattooColor3** (`FString`): Default tattoo color 3 in hexadecimal RGB format.  
- **DefaultTattooColor4** (`FString`): Default tattoo color 4 in hexadecimal RGB format.  
- **GenderType** (`EB1GenderType`): Specifies the gender in which this face art appears in the character customization skin feature list. *(Foreign = "AppearanceTattoo.Id")*  
- **BodyAgeType** (`EB1BodyAgeType`): Specifies the body age in which this face art appears in the character customization skin feature list. *(Foreign = "AppearanceTattoo.Id")*  
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Matching ID based on gender for the face art.
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Matching ID based on body age for the face art.  


## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)
