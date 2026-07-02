# 📘 ObjectPartsCustomUsage Data Guide

## 🧩 Struct: FB1ObjectPartsCustomUsageRow

Defines customization rules for object parts, such as texture compatibility and material/mesh groupings.

### Properties

- **UsableAITexture** (`bool`): If true, AI-generated textures can be applied to this part.  
- **UsableImportedTexture** (`bool`): If true, user-imported textures can be used.  
- **MeshGroups** (`TArray<FName>`): Group IDs of mesh variants available for customization. *(Foreign = "ObjectChangeMeshGroup.Id")*  
- **MaterialChangeGroups** (`TArray<FName>`): Material override groups used with this part. *(Foreign = "ObjectChangeMaterialGroup.Id")*  
- **MaterialGroups** (`TArray<FName>`): Material customization layers applied to this part. *(Foreign = "ObjectCustomizeMaterialGroup.Id")*  
