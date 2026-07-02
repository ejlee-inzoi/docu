# 📘 RelationshipEvent Data Guide

## 🧩 Struct: FB1RelationshipEventTableRow

Defines a relationship event triggered by specific conditions and executed with scripts.

### Properties

- **Id** (`FName`): Unique identifier for the event.  
- **TriggerData** (`FB1RelationshipEventTriggerData`): Event trigger information.
- **EventConditions** (`TArray<FB1Condition>`): Conditions that must be met to trigger this event.  
- **EventExecutes** (`TArray<FB1Execute>`): List of script applied when the event occurs.  


## 📚 References

- [FB1RelationshipEventTriggerData](./Struct/FB1RelationshipEventTriggerData.md)
- [FB1RelationshipEventTriggerTargetData](./Struct/FB1RelationshipEventTriggerTargetData.md)
- [EB1FamilyRelationshipType](./Enum/EB1FamilyRelationshipType.md)
- [EB1GenderType](./Enum/EB1GenderType.md)

- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)

- [FB1Execute](./Struct/FB1Execute.md)
- [EB1ExecuteType](./Enum/EB1ExecuteType.md)