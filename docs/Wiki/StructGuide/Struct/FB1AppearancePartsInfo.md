## 🧩 Struct: FB1AppearancePartsInfo

Describes a customizable appearance part, including its name, description, color, and scalar parameters.

### Properties

- **ListKey** (`FString`): Internal identifier used to group or reference the part.  
- **PartsName** (`FName`): Unique name identifying the part within the system.  
- **PartsDescTextId** (`FString`): Localization key for the description text of the part.  
- **ColorParameter** (`FB1AppearancePartsColorParameterInfo`): Color customization settings for this part.  
- **ScalarParameters** (`TArray<FB1AppearancePartsScalarParameterInfo>`): List of scalar parameters (e.g., roughness, metallic) that can be modified.  


## 📚 References

- [FB1AppearancePartsColorParameterInfo](./FB1AppearancePartsColorParameterInfo.md)
- [FB1AppearancePartsScalarParameterInfo](./FB1AppearancePartsScalarParameterInfo.md)