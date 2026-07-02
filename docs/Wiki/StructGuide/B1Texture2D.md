# 📘 B1Texture2D Data Guide

## 🧩 Struct: FB1Texture2DTableRow

Defines a 2D texture resource entry used in the UI or customization systems.

### Properties

- **Id** (`FName`): Unique identifier for the texture.  
- **Texture2D** (`TSoftObjectPtr<UObject>`): Texture asset or atlas reference. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
