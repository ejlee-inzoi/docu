## 🧩 Struct: FB1GarmentVariantInfo

Defines a single visual variant of a garment, including display text, thumbnail, and position.

### Properties

- **VariantName** (`FName`): Name identifier for the variant.  
- **VariantDescTextId** (`FString`): Localization key for the variant description. *(StringTableKey)*  
- **VariantThumbnail** (`TSoftObjectPtr<UTexture>`): Thumbnail used to preview this variant.  
- **PositionBone** (`FName`): Bone name where this variant is positioned.  
