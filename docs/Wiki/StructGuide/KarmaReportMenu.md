# 📘 KarmaReportMenu Data Guide

## 🧩 Struct: FB1KarmaReportMenuTableRow

Defines a menu tab for displaying karma-related statistics or summaries.

### Properties

- **Id** (`FName`): Unique identifier for the menu tab.  
- **DisplayNameTextId** (`FString`): Localized label for the tab. *(StringTableKey = "Id")*  
- **Icon** (`TSoftObjectPtr<UTexture2D>`): Icon representing the menu tab in UI.  
- **MainTabType** (`EB1KarmaReportMenuType`): Type or classification of this karma report tab.  


## 📚 References

- [EB1KarmaReportMenuType](./Enum/EB1KarmaReportMenuType.md)