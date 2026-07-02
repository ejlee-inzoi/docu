## 🧩 Struct: FB1GarmentPartsGroup

Defines a garment part group with description, thumbnail, and associated parts.

### Properties

- **GroupName** (`FName`): Group identifier. *(Foreign = "CostumeEditParts.Id")*  
- **GroupDescTextId** (`FString`): Localization key for the group description. *(StringTableKey)*  
- **GroupThumbnail** (`TSoftObjectPtr<UTexture>`): Thumbnail image representing the group.  
- **PartsInfo** (`TArray<FB1GarmentPartsInfo>`): List of parts that belong to this group.  

## 📚 References

- [FB1GarmentPartsInfo](./FB1GarmentPartsInfo.md)