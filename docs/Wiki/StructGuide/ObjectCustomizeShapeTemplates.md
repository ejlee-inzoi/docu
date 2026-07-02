# 📘 ObjectCustomizeShapeTemplates Data Guide

## 🧩 Struct: FB1ObjectCustomizeShapeTemplatesRow

Defines a customizable shape template for assembling multi-part objects, including preview, offsets, and named parts.

### Properties

- **TemplateName** (`FName`): Unique identifier for the shape template. *(StringTableKey = "Id")*  
- **Icon** (`TSoftObjectPtr<UObject>`): Preview image for the template. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **OffsetX / OffsetY / OffsetZ** (`float`): Positional offsets for UI preview or placement.  
- **RotationZ** (`float`): Yaw rotation applied to the template (default -45°).  
- **CamDistance** (`float`): Camera distance for UI or editor preview framing.  
- **Template** (`TSoftObjectPtr<UBlueprint>`): Blueprint asset used as the base object for this template.  
- **PartsName00 ~ PartsName02** (`FName`): Localized part labels for each part group. *(StringTableKey)*  
- **PartsTag00 ~ PartsTag02** (`FName`): Logical tags associated with each part group.  
- **Parts00 ~ Parts02** (`TArray<FB1ObjectCustomizeShapeParts>`): Arrays of shape parts belonging to each section (e.g., base, detail, accessory).  


## 📚 References

- [FB1ObjectCustomizeShapeParts](./Struct/FB1ObjectCustomizeShapeParts.md)