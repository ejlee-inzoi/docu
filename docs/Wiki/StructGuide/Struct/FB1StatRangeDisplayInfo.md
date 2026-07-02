## 🧩 Struct: FB1StatRangeDisplayInfo

Defines display settings for a stat when its value falls within a specific range.

### Properties

- **ListKey** (`FString`): Internal key for identifying this display rule.  
- **Step** (`int32`): Visual step or priority index for this display.  
- **MinValue** (`int32`): Minimum stat value for this range.  
- **MaxValue** (`int32`): Maximum stat value for this range.  
- **DisplayNameTextId** (`FString`): Localization key for the stat's display name in this range. *(StringTableKey)*  
- **DisplayNameTextColorId** (`FName`): Color ID for the display name text. *(Foreign = "ColorMapping.Id")*  

## 📚 References

- [ColorMapping](../ColorMapping.md)