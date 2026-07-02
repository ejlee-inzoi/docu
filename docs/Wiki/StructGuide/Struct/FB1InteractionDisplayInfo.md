## 🧩 Struct: FB1InteractionDisplayInfo

Defines UI display data for an interaction, including localization keys and icons.

### Properties

- **DisplayCategoryTextId** (`FString`): Localization key for the category name. *(StringTableKey)*  
- **DisplayTextId** (`FString`): Localization key for the interaction label. *(StringTableKey)*  
- **OverrideQueueTextId** (`FString`): Localization key shown in the interaction queue if overridden. *(StringTableKey)*  
- **Icon** (`TSoftObjectPtr<UObject>`): Icon for general UI. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **InteractionQueueIcon** (`TSoftObjectPtr<UObject>`): Icon shown in the HUD interaction queue. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **PanelIcon** (`TSoftObjectPtr<UObject>`): Icon used in the interaction panel. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **PanelIconId** (`FName`): ID of the panel icon. *(Foreign = "B1Texture2D.Id")*  
- **PanelIconColorId** (`FName`): Color mapping used with the icon. *(Foreign = "ColorMapping.Id")*  
- **LeftMarkerId** (`FName`): ID of the left-side widget marker. *(Foreign = "WidgetMarker.Id")*  
- **PanelIconWithBG** (`FB1IconWithBGInfo`): Background styling and layout for the icon.  
- **bHideUI** (`bool`): If true, this interaction will not be displayed in the UI.  

## 📚 References

- [FB1IconWithBGInfo](./FB1IconWithBGInfo.md)
- [B1Texture2D](../B1Texture2D.md)
- [ColorMapping](../ColorMapping.md)
- [WidgetMarker](../WidgetMarker.md)