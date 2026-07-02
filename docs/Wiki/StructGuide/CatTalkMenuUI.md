# 📘 CatTalkMenuUI Data Guide

## 🧩 Struct: FB1CatTalkMenuUITableRow

Defines a chatbot menu group in the UI, used to organize chatbot-based interactions.

### Properties

- **Id** (`FName`): Unique identifier for this UI menu group.  
- **GroupNameTextId** (`FString`): Localization key for the menu group title. *(StringTableKey = "Id")*  
- **bIsBuildWorldData** (`bool`): If true, this entry is used in build world data mode.  
- **ChatbotIdList** (`TArray<FB1ChatbotId>`): List of chatbot IDs included in this menu group.  


## 📚 References

- [FB1ChatbotId](./Struct/FB1ChatbotId.md)
- [EB1ChatbotType](./Enum/EB1ChatbotType.md)