## 🧩 Struct: FB1PopupButtonDetail

Defines properties for a button displayed in a popup UI, including text, action, and size.

### Properties

- **ListKey** (`FString`): Internal identifier for this button entry.  
- **ButtonText** (`FString`): Localization key for the text shown on the button. *(StringTableKey)*  
- **ButtonType** (`FName`): Identifier representing the button’s purpose or logic category.  
- **ScriptId** (`FName`): ID of the script to execute when the button is pressed. *(Foreign = "Script.Id")*  
- **MinDesiredWidth** (`float`): Minimum width the button should occupy. *(ClampMin = 0.0)*  
- **MaxDesiredWidth** (`float`): Maximum width the button can expand to. *(ClampMin = 0.0)*  
- **Height** (`float`): Fixed height for the button. *(ClampMin = 0.0)*  

## 📚 References

- [Script](../Script.md)