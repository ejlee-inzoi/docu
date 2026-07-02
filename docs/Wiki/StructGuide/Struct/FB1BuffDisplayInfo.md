## 🧩 Struct: FB1BuffDisplayInfo

Contains UI-related metadata for displaying a buff, such as text, icons, color mapping, and visibility settings.

### Properties

- **DisplayTextId** (`FString`): Localization key for the buff’s display name. *(StringTableKey)*  
- **ReasonTextId** (`FString`): Localization key for the reason or tooltip text explaining the buff. *(StringTableKey)*  
- **IconId** (`FName`): ID of the main icon used to represent this buff visually. *(Foreign = "B1Texture2D.Id")*  
- **EmotionColorId1** (`FName`): Primary color mapping ID linked to the buff’s emotional context. *(Foreign = "ColorMapping.Id")*  
- **EmotionColorId2** (`FName`): Secondary color mapping ID to complement `EmotionColorId1`. *(Foreign = "ColorMapping.Id")*  
- **HiddenFromUI** (`bool`): If true, the buff will not be shown in the user interface.  
- **AlarmIconMaterialId** (`FName`): ID of the icon material used in alarm-style overlays. *(Foreign = "B1Texture2D.Id")*  
- **IsHighlight** (`bool`): If true, the buff will be visually emphasized (e.g., glowing).  

## 📚 References

- [B1Texture2D](../B1Texture2D.md)
- [ColorMapping](../ColorMapping.md)