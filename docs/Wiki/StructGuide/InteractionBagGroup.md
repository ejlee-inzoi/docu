# 📘 InteractionBagGroup Data Guide

## 🧩 Struct: FB1InteractionBagGroupTableRow

Defines grouping metadata for interaction bags, used for UI layout and visual themes.

### Properties

- **Id** (`FName`): Unique group identifier.  
- **DisplayStringTextId** (`FString`): Localized label for the group. *(StringTableKey)*  
- **LeftMarkerId** (`FName`): Visual marker for UI placement. *(Foreign = "WidgetMarker.Id")*  
- **PanelIconId** (`FName`): UI icon representing the group. *(Foreign = "B1Texture2D.Id")*  
