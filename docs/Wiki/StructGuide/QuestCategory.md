# 📘 QuestCategory Data Guide

## 🧩 Struct: FB1QuestCategoryTableRow

Defines a quest category for organizing and styling quests in the UI.

### Properties

- **Id** (`FName`): Unique identifier for the quest category.  
- **MainDisplayTextId** (`FString`): Main title shown in the UI. *(StringTableKey = "Id")*  
- **MainCategoryIcon** (`TSoftObjectPtr<UTexture2D>`): Icon representing the category visually.  
- **SubDisplayTextId** (`FString`): Subtitle or secondary name for this category. *(StringTableKey)*  
- **SubCategoryIcon** (`TSoftObjectPtr<UTexture2D>`): Icon for the subcategory section.  
- **CategoryColorId** (`FName`): UI color applied to this category. *(Foreign = "ColorMapping.Id")*  
- **MissionToolTipId** (`FString`): Settings that define how reward tooltips for missions are displayed in the UI. *(Foreign = "Text_UI.Id")*  
