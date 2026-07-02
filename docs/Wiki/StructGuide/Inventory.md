# 📘 Inventory Data Guide

## 🧩 Struct: FB1InventoryTableRow

Defines the configuration of a type of inventory, including capacity limits, visibility conditions, and inventory type classification.

### Properties
- **Id** (`FName`): Unique identifier for the inventory definition.
- **InventoryType** (`EB1InventoryType`): Type classification of this inventory (e.g., character, site, etc.).
- **MaxCount** (`int32`): Maximum number of objects allowed in this inventory. Use -1 for unlimited.
- **DisplayName** (`FString`): Localized UI label text ID.
- **ObjectConditions** (`TArray<FB1Condition>`): Conditions controlling what can be stored.

## 📚 References

- [EB1InventoryType](./Enum/EB1InventoryType.md)
- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)