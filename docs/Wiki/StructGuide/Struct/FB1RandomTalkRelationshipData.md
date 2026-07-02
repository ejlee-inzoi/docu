## 🧩 Struct: FB1RandomTalkRelationshipData

Defines relationship-specific emoticon lists used during random talk interactions.

### Properties

- **ListKey** (`FString`): Internal identifier for this entry.  
- **RelationshipLevel** (`int32`): The relationship level that must exactly match the character's current relationship status for this data to be applied.  
- **PositiveList** (`TArray<FB1RandomTalkEmoticonData>`): Emoticons used when the mood is positive.  
- **NegativeList** (`TArray<FB1RandomTalkEmoticonData>`): Emoticons used when the mood is negative.  

## 📚 References

- [FB1RandomTalkEmoticonData](./FB1RandomTalkEmoticonData.md)