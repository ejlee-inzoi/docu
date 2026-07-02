## 🧩 Struct: FB1InteractionSequenceInfo

Defines a sequence of interactions that can be triggered based on probability and conditions.

### Properties

- **Id** (`FName`): Unique identifier for this interaction sequence.  
- **Probability** (`float`): Probability (0.0–1.0) that this sequence is chosen.  
- **bSequencial** (`bool`): Determines if the interactions should be executed sequentially.  
- **EnableConditionId** (`FName`): Condition ID that must be met to enable this sequence. *(Foreign = "InteractionCondition.Id")*  
- **SequenceStartInfos** (`TArray<FB1SequenceStartInfo>`): List of starting points for the sequence.  
- **MainInteractionId** (`FName`): Main interaction ID associated with this sequence.  
- **InteractionInfos** (`TArray<FB1InteractionInfo>`): List of interactions in this sequence.  
- **CoopId** (`FName`): ID referencing cooperative interaction data. *(Foreign = "Coop.Id")*  
- **bIsTalk** (`bool`): Determines if this sequence involves a talk interaction.  
- **NextInteractionBagId** (`FName`): ID of the next interaction bag to transition to after this sequence. *(Foreign = "InteractionBag.Id")*  

## 📚 References

- [FB1SequenceStartInfo](./FB1SequenceStartInfo.md)
- [FB1InteractionInfo](./FB1InteractionInfo.md)
- [InteractionCondition](../InteractionCondition.md)
- [InteractionBag](../InteractionBag.md)
