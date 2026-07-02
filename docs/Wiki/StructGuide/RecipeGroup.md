# 📘 RecipeGroup Data Guide

## 🧩 Struct: FB1RecipeGroupTableRow

Defines a group of crafting recipes with shared cost, skill level, and display info.

### Properties

- **Id** (`FName`): Unique identifier for the group.  
- **TitleTextId / DescTextId** (`FString`): Localized name and description. *(StringTableKey = "Id")*  
- **CraftingCost** (`int32`): Shared cost for the group (if used).  
- **SkillLevel** (`int32`): Minimum level required to access recipes in this group.  
- **ConditionId** (`FName`): Condition needed to unlock this group. *(Foreign = "ObjectCondition.Id")*  
- **Thumbnail** (`TSoftObjectPtr<UObject>`): Icon representing the group in UI.  
- **RecipeIds** (`TArray<FName>`): List of recipes included in this group. *(Foreign = "Recipe.Id")*  


