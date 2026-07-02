# 📘 DoorCondition Data Guide

## 🧩 Struct: FB1DoorConditionTableRow

Defines conditions that must be met to open a door or gated interaction.

### Properties

- **Id** (`FName`): Unique identifier for this door condition entry.  
- **OpenConditions** (`TArray<FB1Condition>`): List of logic conditions required to open the door.  


## 📚 References

- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)