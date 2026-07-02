## 🧩 Struct: FB1RelationshipGiftConditionData

Defines relationship stat ranges that determine gift eligibility or effect.

### Properties

- **RelationshipStat** (`FName`): ID of the relationship stat. *(Foreign = "RelationshipStat.Id")*  
- **FromLevel** (`int32`): Minimum level required to enable the gift logic.  
- **ToLevel** (`int32`): Maximum level at which the gift still applies.  

## 📚 References

- [RelationshipStat](../RelationshipStat.md)