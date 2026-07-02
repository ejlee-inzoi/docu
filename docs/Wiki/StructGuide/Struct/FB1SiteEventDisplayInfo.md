## 🧩 Struct: FB1SiteEventDisplayInfo

Defines localized name, description, and UI visuals for a site event.

### Properties

- **NameTextId** (`FString`): Localization key for the event name. *(StringTableKey)*  
- **DescTextId** (`FString`): Localization key for the event description. *(StringTableKey)*  
- **Icon** (`TSoftObjectPtr<UTexture2D>`): Icon representing the event. *(AllowedClasses = Texture2D)*  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Thumbnail used in preview or menus. *(AllowedClasses = Texture2D)*  
