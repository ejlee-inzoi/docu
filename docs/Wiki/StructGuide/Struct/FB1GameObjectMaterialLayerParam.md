## 🧩 Struct: FB1GameObjectMaterialLayerParam

Defines a material layer entry including PBR texture references and optional audio when selected.

### Properties

- **ListKey** (`FString`): Internal grouping key for the layer.  
- **MaterialName** (`FName`): Display name of the material. *(StringTableKey)*  
- **Icon** (`TSoftObjectPtr<UObject>`): Icon used for UI preview. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **Albedo** (`TSoftObjectPtr<UTexture>`): Albedo (base color) texture.  
- **Normal** (`TSoftObjectPtr<UTexture>`): Normal map texture.  
- **Packed** (`TSoftObjectPtr<UTexture>`): Packed texture containing AO, Roughness, and Metallic.  
- **Emissive** (`TSoftObjectPtr<UTexture>`): Emissive (glow) texture.  
- **ParamUsageId** (`FName`): Material usage context. *(Foreign = "ObjectPartsParamUsage.Id")*  
- **SelectedAudioId** (`FName`): Audio cue triggered when selected. *(Foreign = "AudioResources.Id")*  

## 📚 References

- [ObjectPartsParamUsage](../ObjectPartsParamUsage.md)
- [AudioResources](../AudioResources.md)