# 📘 AppearanceMakeup Data Guide

## 🧩 Struct: FB1AppearanceMakeupTableRow

Defines a makeup preset, including mask texture, default parameter values, and associated makeup parts.

### Properties

- **Id** (`FName`): Unique identifier for the makeup item.  
- **DescTextId** (`FString`): Localization text ID for the name or description of the makeup. *(StringTableKey = "Id")* *(Category = UI)*  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Thumbnail texture used to visually represent this makeup option in the UI. *(Category = UI)*  
- **DisabledChannels** (`TArray<EB1MakeupChannel>`): Channels that are disabled for this makeup item. Used to control which color or scalar parameters are active. *(Category = UI)*  
- **MakeupPartsId** (`FName`): Identifier used to link this makeup to a specific makeup parts definition. *(Foreign = "AppearanceMakeupParts.Id")*  
- **MaskTexture** (`TSoftObjectPtr<UTexture>`): Texture mask that defines the visible area of this makeup item on the face or body.  
- **MatchingFaceHairId** (`FName`): ID of face hair that matches this makeup item. *(Foreign = "AppearanceEyebrow.Id")*  
- **DefaultValues** (`TArray<FB1AppearanceMakeupParameterValue>`): Default parameter values such as colors and intensities applied when this makeup is selected.  
- **SubCategories** (`TArray<FName>`): Subcategories used to group this makeup item in the UI. *(Foreign = "GarmentSubCategory.Id")*  


## 🧩 Struct: FB1AppearanceMakeupParameterValue

Defines a set of parameter values for a specific makeup channel.

### Properties
- **MaskChannel** (`EB1MakeupChannel`): Which channel this parameter applies to (e.g., R, G, B, A).
- **ColorValues** (`TArray<FString>`): Hex color values applied to the makeup channel.
- **ScalarValues** (`TArray<float>`): Numeric parameters (e.g., intensity, blend).

## 🧩 Enum: EB1MakeupChannel

Represents individual RGBA channels used for layering or isolating parts of a makeup mask texture.

- **R**: Red channel (index 0).
- **G**: Green channel (index 1).
- **B**: Blue channel (index 2).
- **A**: Alpha channel (index 3).
