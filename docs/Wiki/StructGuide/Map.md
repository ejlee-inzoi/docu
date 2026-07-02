# 📘 Map Data Guide

## 🧩 Struct: FB1MapTableRow

Defines information about a playable map or world, including metadata, visual assets, currency, and localization.

### Properties

- **Id** (`FName`): Unique identifier for this map.  
- **LevelName** (`FName`): Name of the game level or persistent level used.  
- **NameTextId** (`FString`): Localization key for the map's display name. *(StringTableKey)*  
- **DescriptionTextId** (`FString`): Localization key for the map's description text. *(StringTableKey)*  
- **CharacterNameFormat** (`EB1CharacterNameFormatType`): Naming convention for characters in this map (e.g., FirstNameLastName, or LastNameFirstName).  
- **CurrencyId** (`FName`): Currency used in this map. *(Foreign = "Currency.Id")*  
- **MapImg** (`TSoftObjectPtr<UObject>`): Image asset used to represent this map in the UI. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **bRelease** (`bool`): If true, this map is available in released builds.  
- **EducationDtId** (`FName`): Education table associated with this map. *(Foreign = "Education.Id")*  
- **bBuildWorld** (`bool`): If true, this map supports user world editing/building.  
- **bSkipCheckParkingStation** (`bool`): If true, skips parking station checks during validation process.  
- **DlcId** (`FName`): Identifier for the DLC this map belongs to.


## 📚 References

- [EB1CharacterNameFormatType](./Enum/EB1CharacterNameFormatType.md)