# 📘 ObjectChangeMaterialGroup Data Guide

## 🧩 Struct: FB1ObjectChangeMaterialGroupRow

Defines a group of objects whose materials can be changed together through a customization system.

### Properties

- **GroupName** (`FName`): Localized or logical name for the material group. *(StringTableKey = "Id")*  
- **ChangeParam** (`TArray<FB1GameObjectChangeMaterialParam>`): List of material parameters to apply to objects in this group.  


## 📚 References

- [FB1GameObjectChangeMaterialParam](./Struct/FB1GameObjectChangeMaterialParam.md)
- [FB1ObjectPartsOverride](./Struct/FB1ObjectPartsOverride.md)