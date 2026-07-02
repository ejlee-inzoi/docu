# 📘 Popup Data Guide

## 🧩 Struct: FB1PopupTableRow

Defines a configurable popup message or dialog window with buttons and behavior.

### Properties

- **Id** (`FName`): Unique identifier for this popup.  
- **PopupType** (`EB1PopupType`): Type of popup (e.g., Common, Alert, Confirm).  
- **DetailType** (`FName`): Further categorization of popup logic.  
- **Title** (`FString`): Popup title text. *(StringTableKey = "Id")*  
- **Desc** (`FString`): Description text displayed in the popup. *(StringTableKey = "Id")*  
- **OpenPlayAudioId** (`FName`): Audio played when the popup opens. *(Foreign = "AudioResources.Id")*  
- **bUseLoadButton** (`bool`): If true, shows a "Load" button in the popup.  
- **bDisableAutoCloseTimer** (`bool`): If true, disables automatic closing after timeout.  
- **ButtonDetail** (`TArray<FB1PopupButtonDetail>`): List of buttons shown with labels and actions.  


## 📚 References

- [FB1PopupButtonDetail](./Struct/FB1PopupButtonDetail.md)
- [FB1PopupConstructData](./Struct/FB1PopupConstructData.md)
- [EB1PopupType](./Enum/EB1PopupType.md)