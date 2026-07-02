## 🧩 Struct: FB1InteractionSlotData

Defines metadata for an interaction slot, including access rules and display conditions.

### Properties

- **SlotGroupId** (`FName`): Identifier for the slot group this slot belongs to.  
- **BodyAge** (`EB1BodyAgeType`): Age group for which this slot is valid.  
- **RequireSpace** (`bool`): If true, additional space is provided to ensure the interaction can be successfully executed.  
- **ShowRequireSpace** (`EB1ShowRequireSpaceType`): Show representation of space requirement. *(EditCondition = "RequireSpace")*  
- **ShowDisabledSlot** (`bool`): If true, slot is shown in a disabled state when unavailable.  
- **EnableOnlyInteractionTags** (`TArray<FName>`): Tags that must be present for the slot to be enabled.  
- **SlotOwnershipTag** (`FName`): Tag that denotes who owns or can use the slot.  

## 📚 References

- [EB1BodyAgeType](../Enum/EB1BodyAgeType.md)
- [EB1ShowRequireSpaceType](../Enum/EB1ShowRequireSpaceType.md)