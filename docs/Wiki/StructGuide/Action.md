# 📘 Action Data Guide

## 🧩 Struct: FB1ActionTableRow

Defines a row in the action data table, containing one or more actions and associated tags.

### Properties

- **Id** (`FName`): Unique identifier for this action entry (used as the row key in the data table).  
- **Actions** (`TArray<FB1ActionInfo>`): List of individual actions to be performed.  
- **ActionTags** (`TArray<FName>`): Tags used to classify or search for this action group.  

## 📚 References

- [FB1ActionInfo](./Struct/FB1ActionInfo.md)
- [EB1ActionType](./Enum/EB1ActionType.md)
- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)