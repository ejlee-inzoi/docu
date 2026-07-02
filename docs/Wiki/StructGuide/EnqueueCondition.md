# 📘 EnqueueCondition Data Guide

## 🧩 Struct: FB1EnqueueConditionTableRow

Defines a set of conditions that must be satisfied before entering an interaction queue.

### Properties

- **Id** (`FName`): Unique identifier for this condition entry.  
- **EnqueueConditions** (`TArray<FB1Condition>`): List of logic conditions required for queuing.  


## 📚 References

- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)