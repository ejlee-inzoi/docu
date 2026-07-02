# 📘 StatEvent Data Guide

## 🧩 Struct: FB1StatEventTableRow

Defines an event triggered by stat changes, including conditions and resulting effects.

### Properties

- **Id** (`FName`): Unique identifier for the stat event.  
- **TriggerData** (`FB1StatEventTriggerData`): Stat range and probability that trigger the event.  
- **EventConditions** (`TArray<FB1Condition>`): Additional conditions required to trigger the event.  
- **EventExecutes** (`TArray<FB1Execute>`): List of executions performed when the event is triggered.  


## 📚 References

- [FB1StatEventTriggerData](./Struct/FB1StatEventTriggerData.md)

- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)

- [FB1Execute](./Struct/FB1Execute.md)
- [EB1ExecuteType](./Enum/EB1ExecuteType.md)