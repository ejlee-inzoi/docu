## 🧩 Struct: FB1RandomTalkEmoticonData

Defines a random emoticon entry used in talk interactions, including UI widget and localized message.

### Properties

- **ListKey** (`FString`): Internal identifier for the emoticon entry.  
- **Emoticon** (`FSoftObjectPath`): Reference to the widget blueprint used as the emoticon. *(AllowedClasses = UMG.WidgetBlueprint)*  
- **Text** (`FString`): Localization key for the text shown with the emoticon. *(StringTableKey)*  
