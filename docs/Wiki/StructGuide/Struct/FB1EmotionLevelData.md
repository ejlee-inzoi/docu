## 🧩 Struct: FB1EmotionLevelData

Defines a single level of emotional intensity and its effects on UI, modifiers, and interaction availability.

### Properties

- **Level** (`int32`): Level of the emotion. Must be ≥ 1. *(ClampMin = 1)*  
- **DisplayTextId** (`FString`): Localization key for the name of the emotion level. *(StringTableKey)*  
- **DescTextId** (`FString`): Localization key for the description. *(StringTableKey)*  
- **ValueGreaterThan** (`int32`): Emotion value must exceed this threshold for the level to activate.  
- **ModifierId** (`FName`): Modifier applied when this emotion level is active. *(Foreign = "Modifier_Emotion.Id")*  
- **ApplyScriptId** (`FName`): Script executed when the level activates. *(Foreign = "Script.Id")*  
- **EmotionColorId1** (`FName`): Primary color used in UI for this emotion level. *(Foreign = "ColorMapping.Id")*  
- **EmotionColorId2** (`FName`): Secondary color for UI. *(Foreign = "ColorMapping.Id")*  
- **PortraitColorId1** (`FName`): First portrait accent color. *(Foreign = "ColorMapping.Id")*  
- **PortraitColorId2** (`FName`): Second portrait accent color. *(Foreign = "ColorMapping.Id")*  
- **FacialExpressionId** (`FName`): Facial animation ID associated with this emotion level. *(Foreign = "FacialExpression.Id")*  
- **PlayMFXId** (`FName`): ID of the MFX (emotion audio effect) to play. *(Foreign = "DT_EmotionAudio.Id")*  
- **DescTooltipTextId** (`FString`): Tooltip text shown when describing the emotion. *(StringTableKey)*  
- **DisableTooltipTextId** (`FString`): Tooltip text shown when interactions are disabled. *(StringTableKey)*  
- **DisableInteractionBagTags** (`TArray<FName>`): Tags of interactions disabled at this emotion level. *(Foreign = "InteractionBag.InteractionBagTags")*  

## 📚 References

- [Modifier](../Modifier.md)
- [Script](../Script.md)
- [ColorMapping](../ColorMapping.md)
- [FacialExpression](../FacialExpression.md)
- [InteractionBag](../InteractionBag.md)