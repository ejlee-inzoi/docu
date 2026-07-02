## 🧩 Struct: FB1PopupConstructData

Defines the visual and behavior configuration for constructing a popup window in UI.

### Properties

- **Icon** (`TSoftObjectPtr<UObject>`): Icon image used in the popup. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **Portrait** (`TSoftObjectPtr<UObject>`): Character portrait image. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **PanelBackground** (`TSoftObjectPtr<UObject>`): Background panel texture. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **bUseConfettiAnim** (`bool`): Whether to trigger a confetti animation when the popup is shown. *(Category = Effect)*  
- **TitleTextColor** (`FLinearColor`): Color applied to the title text. *(Category = Text)*  
- **DescTextColor** (`FLinearColor`): Color applied to the description text. *(Category = Text)*  
- **bGameTimePausedWhileActive** (`bool`): If true, pauses game time while the popup is active. *(Category = Etc)*  
