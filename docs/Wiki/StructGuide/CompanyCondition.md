# 📘 CompanyCondition Data Guide

## 🧩 Struct: FB1CompanyConditionTableRow

Defines a list of conditions that must be satisfied to unlock or validate company progression logic.

### Properties

- **Id** (`FName`): Unique identifier for this condition entry.  
- **DisplayName** (`FString`): Localization key for the condition’s display name. *(StringTableKey = "Id")*  
- **Conditions** (`TArray<FB1Condition>`): List of logic conditions used in rank advancement or availability.  


## 📚 References

- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)