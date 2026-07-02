# 📘 SiteBuildPresetInfo Data Guide

## 🧩 Struct: FB1SiteBuildPresetInfoRow

Defines which build presets are available at a specific site or site type.

### Properties

- **Id** (`FName`): Unique identifier for the build preset info row.  
- **BuildPresetIds** (`TArray<FName>`): List of build preset IDs used for this site. *(Foreign = "BuildPreset.Id")*  
