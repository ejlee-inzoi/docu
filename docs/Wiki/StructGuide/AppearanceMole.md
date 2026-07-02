# 📘 AppearanceMole Data Guide

## 🧩 Struct: FB1AppearanceMoleTableRow

Data for mole displayed in the character customization skin feature list.

### Properties

- **Id** (`FName`): Unique identifier for the skin feature.  
- **DescTextId** (`FString`): Localized description for the skin feature, displayed in the character customization UI. *(StringTableKey = "Id")*  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Thumbnail image representing the skin feature, displayed in the customization UI.  
- **MaskTexture** (`TSoftObjectPtr<UTexture>`): Mask texture used to define the area affected by the skin feature.
- **PartsNum** (`int32`): Number of colors used in the skin feature.  
- **HiddenFromUI** (`bool`): Whether the skin feature should be hidden from the character customization UI.
- **DefaultMoleColor** (`FString`): Default mole color in hexadecimal RGB format.
