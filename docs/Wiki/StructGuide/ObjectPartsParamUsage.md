# 📘 ObjectPartsParamUsage Data Guide

## 🧩 Struct: FB1ObjectPartsParamUsageRow

Defines which material parameters are enabled for an object part, and their default/min/max values.

### Properties

- **UseAlbedoColor / AlbedoColor**: Controls and sets default albedo color (hex string).  
- **UseEmisColor / EmisColor**: Enables emissive color override and its default value.  
- **UseRoughness / RoughnessMin/Max/Default**: Enables and configures roughness range.  
- **UseEmissiveMulti / EmissiveMultiMin/Max/Default**: Multiplier applied to emissive power.  
- **UseSpecular / SpecularMin/Max/Default**: Enables specular override and range.  
- **UseMetallic / MetallicMin/Max/Default**: Enables metallic override and range.  
- **UseOpacity / Opacity**: Toggles opacity parameter and sets default.  
- **UseScale / ScaleMin / ScaleMax**: Enables scaling effect and bounds.  
- **UseOffsetX / UseOffsetY**: Whether to allow offsetting the UVs.  
- **UseMirrorUV**: If true, enables mirrored UV effect.  
