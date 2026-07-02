# 📘 BuildPreset Data Guide

## 🧩 Struct: FB1BuildPresetRow

Defines a complete build preset used in house or building placement, including metadata and resource counts.

### Properties

- **Id** (`FName`): Unique identifier for this preset.  
- **DisplayNameTextId** (`FString`): Localization key for the name of the preset. *(StringTableKey = "Id")*  
- **DescriptionTextId** (`FString`): Localization key for the description. *(StringTableKey = "Id")*  
- **PresetAsset** (`TSoftObjectPtr<UDataTable>`): Data table that contains the build components.  
- **Icon** (`TSoftObjectPtr<UObject>`): Icon representing the preset. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **BedNum** (`int32`): Number of beds included in the preset.  
- **ToiletNum** (`int32`): Number of toilets included in the preset.  
