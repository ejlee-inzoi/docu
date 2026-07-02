## 🧩 Struct: FB1MobileMessageSystemData

Defines a mobile message template used in system-level message dispatching.

### Properties

- **ListKey** (`FString`): Internal identifier for this system message entry.  
- **MapId** (`FName`): ID of the map this message is relevant to. *(Foreign = "Map.Id")*  
- **DisplayNameTextId** (`FString`): Localization key for the message’s display name. *(StringTableKey)*  
- **IconTexture** (`TSoftObjectPtr<UTexture2D>`): Icon used to represent the message in the UI.  
