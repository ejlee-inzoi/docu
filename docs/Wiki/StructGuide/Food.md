# 📘 Food Data Guide

## 🧩 Struct: FB1FoodTableRow

Defines an edible food item, including animation, interaction, nutrition, and display data.

### Properties

- **Id** (`FName`): Unique identifier.  
- **FoodType** (`EB1FoodType`): Category of the food.  
- **CalorieType** (`EB1CalorieType`): Caloric value type.  
- **ObjectId** (`FName`): Linked object. *(Foreign = "Object.Id")*  
- **InteractionTags** (`TArray<FName>`): Usable interaction contexts. *(Foreign = "Interaction.Tags")*  
- **TimeToEat** (`int32`): Seconds required to consume.  
- **NumServings** (`int8`): Number of servings for food type PreparedFood.  
- **ServedFoodDtId** (`FName`): Served food variant for fodd type PreparedFood. *(Foreign = "Food.Id")*  
- **DisplayInfos** (`TArray<FB1FoodDisplayInfo>`): UI display data per mesh.  
- **StartScriptIds**, **TickScriptIds**, **FinishScriptIds** (`TArray<FName>`): Scripts for each phase. *(Foreign = "Script_Book.Id")*  
- **StandEatAnimId** ~ **SitBarTableFoodEatAnimId** (`FName`): Animations per eating pose. *(Foreign = "AnimCharacter_Interaction.Id")*  


@include Data/StrcutGuide/Struct/FB1FoodDisplayInfo.md
@include Data/StrcutGuide/Enum/EB1FoodType.md
@include Data/StrcutGuide/Enum/EB1CalorieType.md
