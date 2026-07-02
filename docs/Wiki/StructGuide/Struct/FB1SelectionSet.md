## 🧩 Struct: FB1SelectionSet

Defines a group of interaction options, including its state group and selection type.

### Properties

- **StateGroupId** (`FName`): Identifier for the group this selection belongs to.  
- **SelectionType** (`EB1SelectionType`): Type of selection behavior (e.g., Normal, Remote, Door).  
- **InteractionBagList** (`TArray<FName>`): List of interaction bags included in this selection set. *(Foreign = "InteractionBag.Id")*  

## 📚 References

- [EB1SelectionType](../Enum/EB1SelectionType.md)
- [InteractionBag](../InteractionBag.md)