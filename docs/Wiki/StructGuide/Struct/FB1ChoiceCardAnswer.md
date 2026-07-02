## 🧩 Struct: FB1ChoiceCardAnswer

Defines the content, condition, script, and weight of an individual answer within a choice card system.

### Properties

- **ListKey** (`FString`): Internal identifier for the answer entry, used for grouping or lookup.  
- **TitleStrId** (`FString`): Localization key for the answer's title text. *(StringTableKey)*  
- **ResultStrId** (`FString`): Localization key for the result text shown after selecting this answer. *(StringTableKey)*  
- **AnswerStrId** (`FString`): Localization key for the answer’s button label or main text. *(StringTableKey)*  
- **ConditionId** (`FName`): ID of the condition that must be satisfied for this answer to be valid. *(Foreign = "ChoiceCardCondition.Id")*  
- **FinishScriptIds** (`TArray<FName>`): Scripts to execute when this answer is selected. *(Foreign = "Script_ChoiceCard.Id")*  
- **Ratio** (`int32`): Relative weight or chance that this answer will appear. *(ClampMin = 0)*  
- **ColorId** (`FName`): Color mapping used to visually represent the answer (e.g., for highlighting or categorization). *(Foreign = "ColorMapping.Id")*  


## 📚 References

- [ChoiceCardCondition](../ChoiceCardCondition.md)
- [Script](../Script.md)
- [ColorMapping](../ColorMapping.md)