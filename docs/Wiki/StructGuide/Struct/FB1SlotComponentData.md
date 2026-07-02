## 🧩 Struct: FB1SlotComponentData

Defines a multi-type component slot used in interaction, FX, object placement, or spatial logic.

### Properties

- **SlotType** (`EB1SlotType`): Type of slot this entry represents (e.g., Interaction, FX, Object).  
- **LinkedSlotMap** (`TMap<EB1SlotDirection, FName>`): Map linking directional slot types to their component names.  
- **InteractionSlot** (`FB1InteractionSlotData`): Slot configuration used for character interactions. *(EditCondition = Interaction)*  
- **FxSlot** (`FB1FxSlotData`): FX configuration data for this slot. *(EditCondition = Fx)*  
- **ExtraRequireSpaceSlot** (`FB1ExtraRequireSpaceSlotData`): Data for spatially constrained slots. *(EditCondition = ExtraRequireSpace)*  
- **ObjectSlotId** (`FName`): ID of the object slot. *(EditCondition = Object, Foreign = "ObjectSlot.Id")*  
- **ConnectedChairComponenetName** (`FName`): Name of the chair component connected to this object slot. *(EditCondition = Object)*  
- **ObjectSlot** (`FB1ObjectSlotData`): Slot configuration for attached objects. *(EditCondition = Object)*  
- **PostureTags** (`TMap<FName, FName>`): Map of posture tags applied to this slot, used for animation control or logical grouping.  

## 📚 References

- [EB1SlotType](../Enum/EB1SlotType.md)
- [EB1SlotDirection](../Enum/EB1SlotDirection.md)
- [FB1FxSlotData](./FB1FxSlotData.md)
- [FB1ExtraRequireSpaceSlotData](./FB1ExtraRequireSpaceSlotData.md)
- [FB1ObjectSlotData](./FB1ObjectSlotData.md)
- [ObjectSlot](../ObjectSlot.md)