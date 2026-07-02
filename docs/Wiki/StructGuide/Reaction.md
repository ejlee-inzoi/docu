# 📘 Reaction Data Guide

## 🧩 Struct: FB1ReactionTableRow

Defines a character reaction with animations, triggering conditions, and scripts.

### Properties

- **Id** (`FName`): Unique identifier for this reaction.  
- **Priority** (`int32`): Priority level for selecting this reaction over others.  
- **Conditions** (`TArray<FB1Condition>`): Triggering logic that activates the reaction.  
- **ReactionAnimInfo** (`FB1ReactionAnimInfo`): Animation played as part of the reaction.  
- **StartScriptIds** (`TArray<FName>`): Scripts triggered at the start of the reaction. *(Foreign = "Script.Id")*  


## 📚 References

- [FB1ReactionAnimInfo](./Struct/FB1ReactionAnimInfo.md)
- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)