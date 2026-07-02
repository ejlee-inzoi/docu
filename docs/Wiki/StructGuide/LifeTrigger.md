# 📘 LifeTrigger Data Guide

## 🧩 Struct: FB1LifeTriggerTableRow

Defines a list of life triggers that are activated under specific circumstances.

### Properties

- **Id** (`FName`): Unique identifier for this life trigger set.  
- **LabelTextId** (`FString`): Localized label for the life trigger UI. *(StringTableKey)*  
- **TriggerList** (`TArray<FB1LifeTriggerInfo>`): List of specific triggers with timing, popups, and execution rules.  


## 📚 References

- [FB1LifeTriggerInfo](./Struct/FB1LifeTriggerInfo.md)