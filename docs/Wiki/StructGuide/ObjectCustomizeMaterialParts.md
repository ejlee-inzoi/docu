# 📘 ObjectCustomizeMaterialParts Data Guide

## 🧩 Struct: FB1ObjectCustomizeMaterialPartsRow

Defines a set of object parts and associated actor group used for material customization.

### Properties

- **Parts** (`TArray<FB1ObjectPartsDefinition>`): List of part definitions, each specifying categories, parameters, and usage IDs.  
- **ChangeActorId** (`FName`): Actor group affected by the material change. *(Foreign = "ObjectChangeActorGroup.Id")*  


## 📚 References

- [FB1ObjectPartsDefinition](./Struct/FB1ObjectPartsDefinition.md)
- [FB1ObjectPartsDescription](./Struct/FB1ObjectPartsDescription.md)