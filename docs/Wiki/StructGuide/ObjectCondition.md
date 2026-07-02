# 📘 ObjectCondition Data Guide

## 🧩 Struct: FB1ObjectConditionTableRow

Defines the conditions under which an object becomes enabled or available in-game.

### Properties

- **Id** (`FName`): Unique identifier for this condition entry.  
- **EnableConditions** (`TArray<FB1Condition>`): List of conditions that must be met to enable the object.  


## 📚 References

- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)