# 📘 ObjectTemplate Data Guide

## 🧩 Struct: FB1ObjectTemplateTableRow

Defines a reusable template for objects, including their asset, customization settings, and interaction logic.

### Properties

- **Id** (`FName`): Unique identifier for the template.  
- **Asset** (`TSoftObjectPtr<UBlueprint>`): Blueprint asset used to instantiate the object.  
- **ObjectSelectionSetId** (`FName`): ID of selection set for object replacements. *(Foreign = "ObjectSelectionSet.Id")*  
- **ObjectWeatheringGroupId** (`FName`): Weathering behavior group. *(Foreign = "ObjectWeathering.Id")*  
- **IsWettable** (`bool`): Whether this object visually reacts to rain or water.  
- **CustomizeType** (`EB1ObjectCustomizeType`): Type of customization (e.g., MaterialOnly or Assemble).  
- **IsCarriable** (`bool`): If true, this object can be picked up or held.  
- **AttachScriptId / DetachScriptId** (`FName`): Scripts run on attach/detach events. *(Foreign = "Script_State.Id")*  
- **PlacementFlags** (`int32`): Bitmask flags affecting placement rules. *(BitmaskEnum = EB1PlacementFlag)*  
- **FollowSlotRotation** (`bool`): If true, the object aligns to the rotation of its slot.  
- **IsDerived** (`bool`): Whether this template inherits from another.  
- **ObjectTags** (`TArray<FName>`): Tags applied to this object instance.  
- **PlacementGuideTextId** (`FString`): Tooltip or help text when placing the object.  
- **OwnershipCategory** (`FName`): Ownership logic category for permissions.  
- **bDisableTakeOutOfInventory** (`bool`): If true, prevents removing from inventory.  
- **bCanInteractInInventory** (`bool`): If true, allows using this object from the inventory.  
- **IgnoreSlotToEntityCheck** (`bool`): Disables validation when occupying a slot.  
- **InventroyInteractionBagId** (`FName`): ID of interaction logic when in inventory. *(Foreign = "InteractionBag.Id")*  


## 📚 References

- [EB1ObjectCustomizeType](./Enum/EB1ObjectCustomizeType.md)