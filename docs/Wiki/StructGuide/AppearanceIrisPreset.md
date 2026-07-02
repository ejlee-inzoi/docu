# 📘 AppearanceIrisPreset Data Guide

## 🧩 Struct: FB1AppearanceIrisPresetTableRow

Data for iris displayed in the character customization iris list.

### Properties

- **Id** (`FName`): Unique identifier for the iris.  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Thumbnail image displayed in the character customization iris list. *(Category = UI)*  
- **DescTextId** (`FString`): Localized description for the iris preset, displayed in the character customization UI. *(StringTableKey = "Id")* *(Category = UI)*  
- **PartsId** (`FName`): Identifier used to group iris customization options. Determines which scalar parameters appear as sliders in the customization UI. *(Foreign = "AppearanceParts.Id")*  
- **IrisMasks** (`TSoftObjectPtr<UMaterialInterface>`): Material instance of iris which provides default values for parameters such as iris mask texture, pupil scale, iris UV radius, eye Color 1, eye color2, iris color balance, and iris color balance smoothness.
