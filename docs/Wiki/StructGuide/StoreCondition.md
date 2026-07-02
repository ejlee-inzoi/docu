# 📘 StoreCondition Data Guide

## 🧩 Struct: FB1StoreConditionTableRow

Defines the enablement conditions for a store item or discount to be active.

### Properties

- **Id** (`FName`): Unique identifier for the store condition.  
- **EnableConditions** (`TArray<FB1Condition>`): List of logic checks that must pass to allow purchase or visibility.  


## 📚 References

- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)