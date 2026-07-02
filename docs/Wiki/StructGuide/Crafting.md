# 📘 Crafting Data Guide

## 🧩 Struct: FB1CraftingTableRow

Defines a crafting recipe or system entry, including categories, requirements, and UI display settings.

### Properties

- **Id** (`FName`): Unique identifier for the crafting entry.  
- **TitleTextId** (`FString`): Localization key for the recipe name. *(StringTableKey = "Id")*  
- **DescTextId** (`FString`): Localization key for the recipe description. *(StringTableKey = "Id")*  
- **SkillId** (`FName`): Required skill to unlock this recipe. *(Foreign = "Skill.Id")*  
- **RecipeListEntryColorId** (`FName`): Color used for displaying this recipe in the list. *(Foreign = "ColorMapping.Id")*  
- **bHasCost** (`bool`): If true, crafting requires resource cost.  
- **Categories** (`TArray<FB1CraftingCategory>`): Crafting category or group to which this recipe belongs.  
- **CraftingFinishTextId** (`FString`): Text shown upon successful crafting. *(StringTableKey)*  
- **bNeedWorkbench** (`bool`): If true, crafting must occur at a workbench.  
- **MoveToWorkbenchInteractionBagId** (`FName`): Interaction used to move to a workbench. *(Foreign = "InteractionBag.Id")*  
- **FindWorkbenchInteractionId** (`FName`): Interaction used to search for a workbench. *(Foreign = "Interaction.Id")*  
- **PublishingId** (`FName`): ID used to group or track user-created items.  
- **PublishingNamingTextId** (`FString`): Text label used when naming a published item. *(StringTableKey)*  
- **PublishingExportTextId** (`FString`): Text label used when exporting the item. *(StringTableKey)*  


## 📚 References

- [FB1CraftingCategory](./Struct/FB1CraftingCategory.md)