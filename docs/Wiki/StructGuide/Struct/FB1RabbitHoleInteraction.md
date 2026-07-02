## 🧩 Struct: FB1RabbitHoleInteraction

Defines an interactive scenario inside a rabbit hole system, including conditions and scripting logic.

### Properties

- **Id** (`FName`): Unique identifier for this rabbit hole interaction.  
- **Ratio** (`int32`): Selection weight or probability used when choosing this interaction.  
- **DisplayTextId** (`FString`): Localization key for the main display text. *(StringTableKey)*  
- **TooltipTextId** (`FString`): Localization key for tooltip description. *(StringTableKey)*  
- **InteractionConditionId** (`FName`): Condition required to trigger this interaction. *(Foreign = "InteractionCondition.Id")*  
- **StartScriptIdList** (`TArray<FName>`): Scripts executed when the interaction starts. *(Foreign = "Script_RabbitHole.Id")*  
- **CancelScriptIdList** (`TArray<FName>`): Scripts executed when the interaction is canceled. *(Foreign = "Script_RabbitHole.Id")*  
- **FinishScriptIdList** (`TArray<FName>`): Scripts executed when the interaction completes. *(Foreign = "Script_RabbitHole.Id")*  

## 📚 References

- [InteractionCondition](../InteractionCondition.md)
- [Script](../Script.md)