## 🧩 Struct: FB1ObjectPartsOverride

Defines an override entry for an object part, specifying replacement mesh, material slot, and usage metadata.

### Properties

- **ListKey** (`FString`): Internal identifier used to reference or group this override.  
- **PartsName** (`FName`): Name of the part.  
- **PartsCategory** (`FName`): Category of the part.  
- **Description** (`TArray<FB1ObjectPartsDescription>`): List of mesh and material configurations used for the part.  
- **ParamUsageId** (`FName`): ID that defines the selection of a standard parameter rule set (e.g., color, roughness, etc.). *(Foreign = "ObjectPartsParamUsage.Id")*  

## 📚 References

- [FB1ObjectPartsDescription](./FB1ObjectPartsDescription.md)
- [ObjectPartsParamUsage](../ObjectPartsParamUsage.md)