# 📘 AppearanceSkinColor Data Guide

## 🧩 Struct: FB1AppearanceSkinColorTableRow

Skin color data used in character customization.

### Properties

- **Id** (`FName`): Unique identifier for the skin color.  
- **DescTextId** (`FString`): Localization key for displaying this skin color in the UI. *(StringTableKey = "Id")*  
- **PalleteColor** (`FString`): Hexadecimal color used to represent this tone in the color palette (e.g., `#FFEEDDFF`).  
- **SkinTone** (`FString`): Hexadecimal color representing the actual skin tone applied to the material.  

