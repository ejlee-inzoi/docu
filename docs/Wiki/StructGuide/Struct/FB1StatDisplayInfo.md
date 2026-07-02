## 🧩 Struct: FB1StatDisplayInfo

Defines how a stat appears in the UI, including name, description, icon, and range-based displays.

### Properties

- **DisplayNameTextId** (`FString`): Localization key for the stat name. *(StringTableKey)*  
- **DescTextId** (`FString`): Localization key for the stat description. *(StringTableKey)*  
- **Icon** (`TSoftObjectPtr<UObject>`): UI icon representing the stat. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **RangeDisplayInfoList** (`TArray<FB1StatRangeDisplayInfo>`): List of display rules based on stat value ranges.  

## 📚 References

- [FB1StatRangeDisplayInfo](./FB1StatRangeDisplayInfo.md)