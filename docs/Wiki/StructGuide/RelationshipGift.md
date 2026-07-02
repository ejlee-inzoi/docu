# 📘 RelationshipGift Data Guide

## 🧩 Struct: FB1RelationshipGiftTableRow

Defines a gift that can be sent in a relationship, including object data and reward logic.

### Properties

- **Id** (`FName`): Unique identifier for the gift entry.  
- **GiftBoxObjectIds** (`TArray<FName>`): Object IDs used for the gift box. *(Foreign = "Object.Id")*  
- **ObjectData** (`FB1RelationshipGiftObjectData`): Item content and quantity of the gift.  
- **ConditionData** (`FB1RelationshipGiftConditionData`): Relationship level requirements for gifting.  
- **RewardData** (`FB1RelationshipGiftRewardData`): Effects granted upon gifting.  


## 📚 References

- [FB1RelationshipGiftObjectData](./Struct/FB1RelationshipGiftObjectData.md)
- [FB1RelationshipGiftConditionData](./Struct/FB1RelationshipGiftConditionData.md)
- [FB1RelationshipGiftRewardData](./Struct/FB1RelationshipGiftRewardData.md)
- [EB1CarriableObjectType](./Enum/EB1CarriableObjectType.md)
- [EB1GiftType](./Enum/EB1GiftType.md)