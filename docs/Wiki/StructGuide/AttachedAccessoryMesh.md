# 📘 AttachedAccessoryMesh Data Guide

## 🧩 Struct: FB1AttachedAccessoryMeshTableRow

Data for attached accessory mesh equipped on the character.

### Properties

- **Id** (`FName`): Unique identifier for this accessory mesh entry.  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Preview image used in the customization UI. *(Category = UI)*  
- **DescTextId** (`FString`): Localization key for the description of the accessory mesh. *(StringTableKey)* *(Category = UI)*  
- **GenderType** (`EB1GenderType`): Gender that this accessory mesh applies to.  
- **BodyAgeType** (`EB1BodyAgeType`): Age group that this accessory mesh is valid for.  
- **SubCategories** (`TArray<FName>`): UI subcategory filters. *(Foreign = "GarmentSubCategory.Id")*  
- **AccessoryType** (`FName`): Type of the attached accessory (e.g., glasses, earrings)
- **OverrideMaterial** (`TArray<TSoftObjectPtr<UMaterialInterface>>`): List of materials that override the default materials for the accessory mesh.  
- **SocketByMesh** (`TMap<FName, TSoftObjectPtr<UStaticMesh>>`): Accessory mesh assets for each socket bone where the accessory is attached.  
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Matching ID based on gender for the attached accessory mesh. *(Foreign = "AttachedAccessoryMesh.Id")*  
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Matching ID based on body age for the attached accessory mesh. *(Foreign = "AttachedAccessoryMesh.Id")*  


## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)
