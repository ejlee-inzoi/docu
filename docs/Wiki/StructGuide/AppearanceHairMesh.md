# 📘 AppearanceHairMesh Data Guide

## 🧩 Struct: FB1AppearanceHairMeshTableRow

Defines skeletal mesh and material configuration for a hair variant, including hat compatibility and matching rules.

### Properties

- **Id** (`FName`): Unique identifier for this hair mesh entry.  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): UI preview image for this mesh. *(Category = UI)*  
- **DescTextId** (`FString`): Localization key for the description text. *(StringTableKey)* *(Category = UI)*  
- **GenderType** (`EB1GenderType`): Gender this mesh variant supports.  
- **BodyAgeType** (`EB1BodyAgeType`): Body age group this mesh variant applies to.  
- **SubCategories** (`TArray<FName>`): List of subcategories used to filter the appearance. *(Foreign = "GarmentSubCategory.Id")*  
- **Mesh** (`TSoftObjectPtr<USkeletalMesh>`): Skeletal mesh used for this hair variant.  
- **GroupId** (`FName`): ID that groups multiple garments or appearances. *(ModTip = "This data is data that groups Garment information.")*  
- **OverrideMaterials** (`TArray<TSoftObjectPtr<UMaterialInterface>>`): Overrides the default hair material when applying a new hair.  
- **HatTypeMesh** (`TMap<EB1HatType, TSoftObjectPtr<USkeletalMesh>>`): Mapping of hat types to their corresponding hair meshes to support hat compatibility.
- **bEnableHairCutHeight** (`bool`): Whether to enable haircut customization for this mesh.  
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Mapping ID based on gender for the hair mesh. *(Foreign = "AppearanceHairMesh.Id")*  
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Mapping ID based on body age for the hair mesh. *(Foreign = "AppearanceHairMesh.Id")*  


## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)
- [EB1HatType](./Enum/EB1HatType.md)