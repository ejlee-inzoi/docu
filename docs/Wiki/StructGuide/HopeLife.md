# 📘 HopeLife Data Guide

## 🧩 Struct: FB1HopeLifeTableRow

Defines a broad "life hope" concept used for long-term aspirations, often visualized in UI or trait systems.

### Properties

- **Id** (`FName`): Unique identifier for the life hope.  
- **Image** (`TSoftObjectPtr<UObject>`): Image displayed for this hope. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **TitleTextId** (`FString`): UI title. *(StringTableKey)*  
- **DescriptionTextId** (`FString`): Main description text. *(StringTableKey)*  
- **InfoTextId** (`FString`): Additional detail or tooltip text. *(StringTableKey)*  
- **LinkedTraitId** (`FName`): Trait associated with this life hope. *(Foreign = "TraitHopeLife.Id")*  
