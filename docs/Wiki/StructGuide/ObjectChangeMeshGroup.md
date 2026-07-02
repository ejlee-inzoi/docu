# 📘 ObjectChangeMeshGroup Data Guide

## 🧩 Struct: FB1ObjectChangeMeshGroupRow

Defines a group of mesh variants for a customizable object, including preview image and UI display name.

### Properties

- **GroupName** (`FName`): Internal group name. *(StringTableKey = "Id")*  
- **DisplayName** (`FName`): Display name shown in UI. *(StringTableKey = "Id")*  
- **Icon** (`TSoftObjectPtr<UObject>`): Icon used for UI display. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **OverrideParam** (`bool`): If true, this mesh overrides default material parameters.  
- **ParamUsageId** (`FName`): Parameter usage identifier linked to object material logic. *(Foreign = "ObjectPartsParamUsage.Id")*  
- **ChangeParam** (`TArray<FB1GameObjectChangeMeshParam>`): List of mesh variants in this group.  


## 📚 References

- [FB1GameObjectChangeMeshParam](./Struct/FB1GameObjectChangeMeshParam.md)