## 🧩 Struct: FB1SiteTypeUIInfo

Defines UI settings for a site type, including icon and color styling.

### Properties

- **SiteState** (`EB1SiteState`): State or category of the site.  
- **Icon** (`TSoftObjectPtr<UObject>`): UI icon for the site type. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **IconColorId** (`FName`): ID of the color mapping used for the icon. *(Foreign = "ColorMapping.Id")*  
- **BgColorId** (`FName`): ID of the background color mapping. *(Foreign = "ColorMapping.Id")*  
- **NameOverrideTextId** (`FString`): Optional text override for the site name. *(StringTableKey)*  

## 📚 References

- [EB1SiteState](../Enum/EB1SiteState.md)
- [ColorMapping](../ColorMapping.md)