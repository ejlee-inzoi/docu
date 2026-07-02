# 📘 ObjectCustomizeMaterialGroup Data Guide

## 🧩 Struct: FB1ObjectCustomizeMaterialGroupRow

Defines a group of material layer settings used for customizing object appearances.

### Properties

- **GroupName** (`FName`): Identifier for this material customization group. *(StringTableKey = "Id")*  
- **LayerParam** (`TArray<FB1GameObjectMaterialLayerParam>`): List of layered material parameters used for customization (e.g., albedo, normal, emissive).  


## 📚 References

- [FB1GameObjectMaterialLayerParam](./Struct/FB1GameObjectMaterialLayerParam.md)