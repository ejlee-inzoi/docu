# 📘 MobileMessageParties Data Guide

## 🧩 Struct: FB1MobileMessagePartiesTableRow

Defines the sender and receiver of a mobile message, allowing the system to simulate a conversation between characters.

### Properties

- **Id** (`FName`): Unique identifier for this message party configuration.  
- **Sender** (`FB1MobileMessagePartiesData`): Data describing the message sender, including filtering conditions.  
- **Receiver** (`FB1MobileMessagePartiesData`): Data describing the message recipient, including filtering conditions.  


## 📚 References

- [FB1MobileMessagePartiesData](./Struct/FB1MobileMessagePartiesData.md)
- [EB1MobileMessageBaseObject](./Enum/EB1MobileMessageBaseObject.md)
- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)