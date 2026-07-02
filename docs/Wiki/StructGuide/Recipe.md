# 📘 Recipe Data Guide

## 🧩 Struct: FB1RecipeTableRow

Defines a crafting recipe, including ingredients, steps, product, and optional scripts.

### Properties

- **Id** (`FName`): Unique identifier for the recipe.  
- **CraftingId** (`FName`): ID of the crafting interface or system used. *(Foreign = "Crafting.Id")*  
- **SkillLevel** (`int32`): Minimum skill level required to use this recipe.  
- **QualityId** (`FName`): Quality setting used when crafting this recipe. *(Foreign = "Quality.Id")*  
- **CraftingCost** (`int32`): Cost or time required to start crafting.  
- **FinalObjectType** (`EB1CraftingFinalObjectType`): Type of result this recipe produces (e.g., food, tool).  
- **FinalObjectId** (`FName`): ID of the crafted object. *(Foreign = "Object.Id")*  
- **FinishScriptIds** (`TArray<FName>`): Scripts run when crafting is completed. *(Foreign = "Script_Recipe.Id")*  
- **Ingredients** (`TArray<FB1CraftingIngredient>`): Required items for crafting.  
- **CraftingSteps** (`TArray<FB1CraftingStep>`): Optional multi-step logic or progression.  
- **TotalProgressTime** (`float`): Time (in seconds) to complete crafting.  
- **ProgressTimeModifierId** (`FName`): Modifier affecting crafting speed. *(Foreign = "Modifier_Crafting.Id")*  


## 📚 References

- [FB1CraftingIngredient](./Struct/FB1CraftingIngredient.md)
- [FB1CraftingStep](./Struct/FB1CraftingStep.md)
- [FB1CraftingObjectSpawnData](./Struct/FB1CraftingObjectSpawnData.md)
- [EB1CraftingFinalObjectType](./Enum/EB1CraftingFinalObjectType.md)
- [EB1CraftObjectSpawnPoint](./Enum/EB1CraftObjectSpawnPoint.md)
- [EB1CraftingIngredientSearchType](./Enum/EB1CraftingIngredientSearchType.md)