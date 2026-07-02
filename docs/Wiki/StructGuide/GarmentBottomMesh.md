# 📘 GarmentBottomMesh Data Guide

## 🧩 Struct: FB1GarmentBottomMeshTableRow

Data for bottom mesh equipped on the character.  
Includes mesh, material, region coverage, layering, and gender/age-based remapping information.

### Properties

- **Id** (`FName`): Unique identifier for this mesh entry.  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Image preview used in the customization UI.  
- **DescTextId** (`FString`): Localization key for the mesh description. *(StringTableKey)*  
- **GenderType** (`EB1GenderType`): Gender this mesh is designed for.  
- **BodyAgeType** (`EB1BodyAgeType`): Age group that this mesh applies to.  
- **SubCategories** (`TArray<FName>`): Subcategories for filtering this mesh. *(Foreign = "GarmentSubCategory.Id")*  
- **Mesh** (`TSoftObjectPtr<USkeletalMesh>`): Default skeletal mesh used for this bottom item.  
- **GroupId** (`FName`): Grouping identifier to cluster similar garment meshes.  
- **OverrideMaterial** (`TArray<TSoftObjectPtr<UMaterialInterface>>`): List of material overrides applied to this mesh.  
- **bRequireCustomParts** (`bool`): Whether this is a custom part for crafted garments.  
- **SkinningTarget** (`EB1MeshSkinningTarget`): Skeleton target that this mesh binds to (e.g., Body, Head).  
- **LayerPriority** (`int32`): Determines priority when overlapping with other garments, based on DrawingRegion/CoveringRegion.  
- **DrawingRegions** (`TArray<EB1GarmentCoveringRegion>`): Combination of regions where this garment is drawn, even by 1 pixel. Masked by upper layer's CoveringRegions.  
- **CoveringRegions** (`TArray<EB1GarmentCoveringRegion>`): Combination of regions this garment completely covers. Masks lower layer's DrawingRegions.  
- **BodyRegions** (`TArray<EB1BodyRegion>`): Body mesh parts completely hidden by this garment. Only uncovered parts are used for body mesh recombination. 
- **Tags** (`TArray<FName>`): Custom tags used for garment mesh filtering or logic. *(ModTip: Tags of the GarmentMeshTables that inherit from the specified class)*  
- **DeformedMesh** (`TSoftObjectPtr<USkeletalMesh>`): Skeletal mesh used when bottom deformation is enabled. (e.g., jacket).
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): ID of the garment mesh to switch to when character's gender changes. *(Foreign = "GarmentBottomMesh.Id")*  
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): ID of the garment mesh to switch to when character's age changes. *(Foreign = "GarmentBottomMesh.Id")*  


## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)
- [EB1MeshSkinningTarget](./Enum/EB1MeshSkinningTarget.md)
- [EB1GarmentCoveringRegion](./Enum/EB1GarmentCoveringRegion.md)
- [EB1BodyRegion](./Enum/EB1BodyRegion.md)