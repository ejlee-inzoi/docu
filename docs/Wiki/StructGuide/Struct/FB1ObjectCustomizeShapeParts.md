## 🧩 Struct: FB1ObjectCustomizeShapeParts

Represents a customizable shape part within an object, linked to a static mesh and visual icon.

### Properties

- **PartsId** (`FName`): ID of the part. *(ModTip = "References Garment Mesh Json Files")*  
- **Asset** (`TSoftObjectPtr<UStaticMesh>`): Static mesh asset used for this part.  
- **Icon** (`TSoftObjectPtr<UObject>`): Icon representing this shape part. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
