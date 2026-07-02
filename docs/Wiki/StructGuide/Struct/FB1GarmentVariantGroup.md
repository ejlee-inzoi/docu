## 🧩 Struct: FB1GarmentVariantGroup

Defines a group of garment visual variants with shared display settings.

### Properties

- **GroupName** (`FName`): Identifier for the variant group. *(Foreign = "CostumeEditParts.Id")*  
- **GroupDescTextId** (`FString`): Localization key for the group description. *(StringTableKey)*  
- **GroupThumbnail** (`TSoftObjectPtr<UTexture>`): Thumbnail image for visual representation.  
- **VariantInfo** (`TArray<FB1GarmentVariantInfo>`): List of variant entries included in this group.  

## 📚 References

- [FB1GarmentVariantInfo](./FB1GarmentVariantInfo.md)
- [CostumeEditParts](../CostumeEditParts.md)