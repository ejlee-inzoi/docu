# 📘 TalkSelection Data Guide

## 🧩 Struct: FB1TalkSelectionTableRow

Defines selectable talk options shown to the player, including category, condition, and visual UI information.

### Properties

- **Id** (`FName`): Unique identifier for this talk selection entry.  
- **TalkType** (`FName`): Category or grouping for this type of talk (used in UI sorting).  
- **DisplayStringTextId** (`FString`): Localized name for this talk option. *(StringTableKey)*  
- **ConditionId** (`FName`): Condition to determine if this talk type is visible or enabled. *(Foreign = "InteractionCondition_Talk.Id")*  
- **DisplayIcon** (`TSoftObjectPtr<UObject>`): Icon shown beside the talk option. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **DisplayIconColorId** (`FName`): Optional color override for the talk icon. *(Foreign = "ColorMapping.Id")*  
- **InteractionBagList** (`TArray<FName>`): List of interaction bags triggered when this talk is selected. *(Foreign = "InteractionBag_Talk.Id")*  
- **LeftMarkerId** (`FName`): Optional UI marker shown to the left of this option. *(Foreign = "WidgetMarker.Id")*  
