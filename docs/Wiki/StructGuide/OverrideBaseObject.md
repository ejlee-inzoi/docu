# 📘 OverrideBaseObject Data Guide

## 🧩 Struct: FB1OverrideBaseObjectTableRow

Defines base-object-specific overrides used for unique logic or restrictions.

### Properties

- **Id** (`FName`): Unique identifier for the override entry.  
- **BaseObject** (`EB1OverrideBaseObject`): Base object type this rule applies to (e.g., Self, Target).  
- **Conditions** (`TArray<FB1Condition>`): List of logic checks that must pass for the override to be active.  


## 📚 References

- [EB1OverrideBaseObject](./Enum/EB1OverrideBaseObject.md)
- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)