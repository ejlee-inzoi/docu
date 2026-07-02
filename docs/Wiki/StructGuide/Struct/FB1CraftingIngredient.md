## 🧩 Struct: FB1CraftingIngredient

Defines an ingredient entry used in a crafting recipe, including object ID, quantity, and search behavior.

### Properties

- **ObjectId** (`FName`): ID of the object used as an ingredient. *(Foreign = "Object.Id")*  
- **Count** (`int32`): Number of items required for this ingredient.  
- **SearchType** (`EB1CraftingIngredientSearchType`): Defines how this ingredient is searched for (e.g., inventory, context-sensitive).  
- **TargetFilterInteractionId** (`FName`): Optional filter used to match eligible interaction sources. *(Foreign = "TargetFilter.Id")*  

## 📚 References

- [EB1CraftingIngredientSearchType](../Enum/EB1CraftingIngredientSearchType.md)
- [TargetFilter](../TargetFilter.md)