## 🧩 Struct: FB1SkillDisplayInfo

Defines UI display data for a skill, including localized name, description, and icon.

### Properties

- **DisplayNameTextId** (`FString`): Localization key for the skill name. *(StringTableKey)*  
- **DescTextId** (`FString`): Localization key for the skill description. *(StringTableKey)*  
- **Icon** (`TSoftObjectPtr<UObject>`): Icon representing the skill. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
