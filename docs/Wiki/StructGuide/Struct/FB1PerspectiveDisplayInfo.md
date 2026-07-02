## 🧩 Struct: FB1PerspectiveDisplayInfo

Defines UI display information for a specific value system (perspective), such as name and multiple contextual descriptions.

### Properties

- **PerspectiveId** (`FName`): ID of the value system (linked to `TraitValue.Id`). *(Foreign = "TraitValue.Id")*  
- **TraitValueNameTextId** (`FString`): Localization key for the name of the trait. *(StringTableKey)*  
- **JoyCardDescTextId** (`FString`): Key for the trait description shown in the Joy Card UI. *(StringTableKey)*  
- **MainPopUpDescTextId** (`FString`): Key for the trait description shown in selecting or changing traits UI . *(StringTableKey)*  
- **InfoTooltipDescTextId** (`FString`): Description shown in the tooltip UI. *(StringTableKey)*  

## 📚 References

- [TraitValue](../TraitValue.md)