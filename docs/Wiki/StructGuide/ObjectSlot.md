# 📘 ObjectSlot Data Guide

## 🧩 Struct: FB1ObjectSlotTableRow

Defines settings for object slots that accept attachments, such as sinks or windows.

### Properties

- **Id** (`FName`): Unique identifier for this slot.  
- **EnableObjectCategories** (`TArray<FName>`): Object categories allowed in this slot. *(Foreign = "Object.ObjectCategory")*  
- **DisableCondition** (`FB1DisableSlotCondition`): Conditions under which this slot becomes unusable.  
- **StartOccupyScriptId / EndOccupyScriptId** (`FName`): Scripts triggered when slot becomes occupied or freed. *(Foreign = "Script_Slot.Id")*  
- **AllowOverlap** (`bool`): If true, allows overlapping placement.  
- **OccupiableOverlap** (`bool`): If true, slot can be considered occupied even when overlapped.  

## 📚 References

- [FB1DisableSlotCondition](./Struct/FB1DisableSlotCondition.md)