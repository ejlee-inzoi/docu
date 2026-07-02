# 📘 ObjectSelectionSet Data Guide

## 🧩 Struct: FB1ObjectSelectionSetTableRow

Defines a selectable group of objects for spawning or replacement.

### Properties

- **Id** (`FName`): Unique ID for the object selection set.  
- **SelectionSets** (`TArray<FB1SelectionSet>`): List of selectable object entries.  
- **IsDisplayObjectString** (`bool`): Whether object display names are shown in the selection UI.  
- **bShowInteractionOnGroupClick** (`bool`): If true, shows available interactions when the group is clicked.  


## 📚 References

- [FB1SelectionSet](./Struct/FB1SelectionSet.md)
- [EB1SelectionType](./Enum/EB1SelectionType.md)
