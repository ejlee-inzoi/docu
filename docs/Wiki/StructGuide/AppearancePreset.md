# 📘 AppearancePreset Data Guide

## 🧩 Struct: FB1AppearancePresetTableRow

Defines a preset entry containing full appearance settings such as body, face, hair, and clothing used in both Zoi appearance and garment preset lists in the character customization UI.

### Properties

- **Id** (`FName`): Unique identifier for this appearance preset.  
- **SubCategories** (`TArray<FName>`): Subcategories used to group this makeup item in the UI. *(Foreign = "GarmentSubCategory.Id")*  
- **GenderType** (`EB1GenderType`): Specifies the gender the character will switch to when this appearance preset is applied.  
- **Age** (`int32`): Specifies the age the character will switch to when this appearance preset is applied. *(ClampMin = 0)*  
- **BodySkinColorId** (`FName`): Specifies the body skin color that will be set to the character when this preset is applied. *(Foreign = "AppearanceSkinColor.Id")*  
- **BodyShapeId** (`FName`): Specifies the body shape that will be set to the character when this preset is applied. *(Foreign = "AppearanceBodyShape.Id")*  

#### 🧍 Face

- **HeadId** (`FName`): Specifies the head that will be set to the character when this preset is applied. *(Foreign = "AppearanceHead.Id")*  
- **EyebrowId** (`FName`): Specifies the eyebrow that will be set to the character when this preset is applied. *(Foreign = "AppearanceEyebrow.Id")*  
- **EyebrowColor** (`FString`): Specifies the eyebrow color in hexadecimal RGB format which will be set to the character when this preset is applied. (hex format).  
- **EyelashId** (`FName`): Specifies the eyelash that will be set to the character when this preset is applied. *(Foreign = "AppearanceEyelash.Id")*  
- **EyelashColor** (`FString`): Specifies the eyelash color in hexadecimal RGB format which will be set to the character when this preset is applied. (hex format).  
- **MustacheId** (`FName`): Specifies the mustache that will be set to the character when this preset is applied. *(Foreign = "AppearanceMustache.Id")*  
- **BeardId** (`FName`): Specifies the beard that will be set to the character when this preset is applied. *(Foreign = "AppearanceBeard.Id")*  
- **FaceHairColor** (`FString`): Specifies the facial hair color in hexadecimal RGB format which will be set to the character when this preset is applied. (hex format).  

#### 💇 Hair

- **HairId** (`FName`): Specifies the hair that will be set to the character when this preset is applied. *(Foreign = "AppearanceHairMesh.Id")*  
- **HairColor** (`FString`): Specifies the hair color in hexadecimal RGB format which will be set to the character when this preset is applied. (hex format).  

#### 👕 Clothing

- **FullId** (`FName`): Specifies the one-piece garment that will be set to the character when this preset is applied. *(Foreign = "GarmentFullMesh.Id")*  
- **TopId** (`FName`): Specifies the top garment that will be set to the character when this preset is applied. *(Foreign = "GarmentTopMesh.Id")*  
- **BottomId** (`FName`): Specifies the bottom garment that will be set to the character when this preset is applied. *(Foreign = "GarmentBottomMesh.Id")*  
- **JacketId** (`FName`): Specifies the jacket that will be set to the character when this preset is applied. *(Foreign = "GarmentJacketMesh.Id")*  
- **SocksId** (`FName`): Specifies the socks that will be set to the character when this preset is applied. *(Foreign = "GarmentSocksMesh.Id")*  
- **StockingsId** (`FName`): Specifies the stockings that will be set to the character when this preset is applied. *(Foreign = "GarmentStockingsVariants.Id")*  
- **ShoesId** (`FName`): Specifies the shoes that will be set to the character when this preset is applied. *(Foreign = "GarmentShoesMesh.Id")*  
- **HatId** (`FName`): Specifies the hat that will be set to the character when this preset is applied. *(Foreign = "GarmentHatMesh.Id")*  
- **InnerUnderId** (`FName`): Specifies the inner undergarment that will be set to the character when this preset is applied. *(Foreign = "GarmentInnerUnderMesh.Id")*  
- **InnerTopId** (`FName`): Specifies the inner top garment that will be set to the character when this preset is applied. *(Foreign = "GarmentInnerTopMesh.Id")*  
- **Accessories** (`TMap<FName, FName>`): Specifies the accessories that will be applied to the character when this preset is applied.

#### 🏷️ Tags

- **Tags** (`TArray<FName>`): List of custom tags for filtering the preset in character customization UI.  
- **AgingConditionFlags** (`int32`): Bitmask flags indicating valid growth steps for random selection when generating appearances. *(BitmaskEnum = EB1GrowthStep)*  
- **RaceTags** (`TArray<EB1DiversityRace>`): Valid race tags for random selection when generating appearances.  
- **OutfitCategoryTags** (`TArray<EB1OutfitCategory>`): Outfit categories used to filter this preset, allowing for easier selection in the character customization UI. *(Foreign = "DataFilter.TagList")*  

#### 🖼️ UI

- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Thumbnail image displayed in the character customization preset list.  
- **HiddenFromUI** (`bool`): If true, this preset will not be displayed in the character customization preset list.  
- **bFilterCrowdRandomPick** (`bool`): If true, this preset is excluded from random selection when generating appearances.  


## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1DiversityRace](./Enum/EB1DiversityRace.md)
- [EB1OutfitCategory](./Enum/EB1OutfitCategory.md)
