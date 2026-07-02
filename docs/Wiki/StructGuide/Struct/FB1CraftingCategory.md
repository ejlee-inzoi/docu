## 🧩 Struct: FB1CraftingCategory

Represents a crafting category, which includes grouped and direct recipe references along with a display title.

### Properties

- **Category** (`FName`): Internal category identifier.  
- **TitleTextId** (`FString`): Localization key for the display title of the category. *(StringTableKey)*  
- **RecipeGroupIds** (`TArray<FName>`): List of recipe group IDs included in this category. *(Foreign = "RecipeGroup.Id")*  
- **RecipeIds** (`TArray<FName>`): List of specific recipe IDs included in this category. *(Foreign = "Recipe.Id")*  

## 📚 References

- [Recipe](../Recipe.md)
- [RecipeGroup](../RecipeGroup.md)