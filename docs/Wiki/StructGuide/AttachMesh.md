# 📘 AttachMesh Data Guide

## 🧩 Struct: FB1AttachMeshTableRow

Defines a table row for meshes that are attached to characters, including gender/growth-specific mesh entries.

### Properties

- **Id** (`FName`): Unique identifier for this attached mesh entry.  
- **GroupId** (`FName`): Optional group ID for organizing mesh entries by logical category.  
- **MeshList** (`TArray<FB1AttachMeshInfo>`): List of attachable mesh assets, filtered by gender and growth step.  


## 📚 References

              
- [FB1AttachMeshInfo](./Struct/FB1AttachedMeshInfo.md)
- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1AnimGrowthStep](./Enum/EB1AnimGrowthStep.md)
