# 📘 RumorEvent Data Guide

## 🧩 Struct: FB1RumorEventTableRow

Defines an event that is triggered by a rumor, often affecting characters or world state.

### Properties

- **Id** (`FName`): Unique identifier for the rumor event.  
- **Type** (`EB1RumorEventType`): Category of the event (e.g., Positive, Negative, Expire).  
- **TargetInt** (`int32`): Custom integer value used for scripting or filtering.  
- **CustomMessageId** (`FName`): ID for a custom mobile message triggered by this event. *(Foreign = "CustomMobileMessage.Id")*  


## 📚 References

- [EB1RumorEventType](./Enum/EB1RumorEventType.md)