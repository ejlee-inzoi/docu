## 🧩 Struct: FB1RelationshipEventTriggerData

Defines a trigger for an event based on a relationship stat and character conditions.

### Properties

- **StatName** (`FName`): The name of the relationship stat that this event is associated with. *(Foreign = "RelationshipStat.Id")*  
- **Self** (`FB1RelationshipEventTriggerTargetData`): The name of the relationship stat that this event is associated with.  
- **Target** (`FB1RelationshipEventTriggerTargetData`): Conditions and probability for the entity receiving the event.  
- **Level** (`int32`): Required relationship level for the event to be valid.
- **TimeDay** (`int32`): Days required or threshold related to the event.  

## 📚 References

- [FB1RelationshipEventTriggerTargetData](./FB1RelationshipEventTriggerTargetData.md)
- [RelationshipStat](../RelationshipStat.md)