# 📘 WidgetMarker Data Guide

## 🧩 Struct: FB1WidgetMarkerTableRow

Defines visual markers shown in the UI for widget-based interactions.

### Properties

- **Id** (`FName`): Unique identifier for the marker.  
- **DisplayNameTextId** (`FString`): Localized name shown for the marker. *(StringTableKey = "Id")*  
- **ColorId** (`FName`): Color mapping ID for the marker. *(Foreign = "ColorMapping.Id")*  
- **IconId** (`FName`): Icon asset for the marker. *(Foreign = "B1Texture2D.Id")*  
- **bIsKarmaIcon** (`bool`): If true, this marker is used in the karma system.  
