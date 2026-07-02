## 🧩 Struct: FB1GameObjectChangeMaterialParam

Defines material override data for a game object, including customization icons and per-part application.

### Properties

- **ListKey** (`FString`): Internal identifier for this material override entry.  
- **MaterialName** (`FName`): Display name of the material. *(StringTableKey)*  
- **Icon** (`TSoftObjectPtr<UObject>`): Icon used for UI preview. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **Material** (`TSoftObjectPtr<UMaterialInterface>`): Material asset to apply.  
- **OverrideParam** (`bool`): Whether to override material instance parameters.  
- **ParamUsageId** (`FName`): Usage context ID for this material. *(Foreign = "ObjectPartsParamUsage.Id")*  
- **OverrideTransparency** (`bool`): If true, overrides transparency settings of the mesh.  
- **OverrideParts** (`bool`): If true, the override applies to specific parts only.  
- **Parts** (`TArray<FB1ObjectPartsOverride>`): List of parts this material override affects.  

## 📚 References

- [FB1ObjectPartsOverride](./FB1ObjectPartsOverride.md)
- [ObjectPartsParamUsage](../ObjectPartsParamUsage.md)