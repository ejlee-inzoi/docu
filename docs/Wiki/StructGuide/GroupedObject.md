# 📘 GroupedObject Data Guide

## 🧩 Struct: FB1GroupedObjectTableRow

Defines an object composed of multiple sub-objects, including visual details and ownership logic.

### Properties

- **Id** (`FName`): Unique identifier for this grouped object.  
- **DisplayNameTextId** (`FString`): Localization key for the name of the grouped object. *(StringTableKey = "Id")*  
- **DescriptionTextId** (`FString`): Localization key for the description shown in UI. *(StringTableKey = "Id")*  
- **ObjectCategory** (`FName`): Main category this object belongs to.  
- **FilterCategory** (`FName`): Filter tag used to sort this item in UI.  
- **Icon** (`TSoftObjectPtr<UObject>`): Icon displayed in inventory or placement menus. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **ParentObjectId** (`FName`): ID of the base object this entry represents. *(Foreign = "Object.Id")*  
- **ChildrenInfos** (`TArray<FB1GroupedChildObjectInfo>`): List of child objects attached to this one.  
- **ConditionId** (`FName`): Condition required for this object to appear or become active. *(Foreign = "ObjectCondition.Id")*  


## 📚 References

- [FB1GroupedChildObjectInfo](./Struct/FB1GroupedChildObjectInfo.md)