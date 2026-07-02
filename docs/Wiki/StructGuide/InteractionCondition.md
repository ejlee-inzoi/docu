# 📘 InteractionCondition Data Guide

## 🧩 Struct: FB1InteractionConditionTableRow

Defines visibility and usability conditions for interactions.

### Properties

- **Id** (`FName`): Unique identifier.  
- **VisibleConditions** (`TArray<FB1Condition>`): Conditions that control UI visibility.  
- **EnableConditions** (`TArray<FB1Condition>`): Conditions required to enable the interaction.  


## 📚 References

- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)