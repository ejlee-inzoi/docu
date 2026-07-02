## 🧩 Struct: FB1ObjectPartsDefinition

Defines a customizable object part including its category, name, description, and usage parameters.

### Properties

- **ListKey** (`FString`): Internal key used to identify this object part definition.  
- **PartsCategory** (`FName`): Category to which this part belongs (e.g., Hat, Top, Accessory).  
- **PartsName** (`FName`): Localized name ID for the part. *(StringTableKey)*  
- **Description** (`TArray<FB1ObjectPartsDescription>`): List of detailed description blocks for this part.  
- **ParamUsageId** (`FName`): ID that defines the selection of a standard parameter rule set (e.g., color, roughness, etc.). *(Foreign = "ObjectPartsParamUsage.Id")*  
- **CustomUsageId** (`FName`): ID that defines the selection of a custom material layer configuration (e.g., textures, etc.). *(Foreign = "ObjectPartsCustomUsage.Id")*  

## 📚 References

- [FB1ObjectPartsDescription](./FB1ObjectPartsDescription.md)
- [ObjectPartsParamUsage](../ObjectPartsParamUsage.md)
- [ObjectPartsCustomUsage](../ObjectPartsCustomUsage.md)