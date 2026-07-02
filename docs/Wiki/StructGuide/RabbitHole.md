# 📘 RabbitHole Data Guide

## 🧩 Struct: FB1RabbitHoleTableRow

Defines a special "rabbit hole" interaction with scheduled actions, animations, and choices.

### Properties

- **Id** (`FName`): Unique identifier for the interaction.  
- **IconTexture** (`TSoftObjectPtr<UObject>`): Icon texture for this interaction (supports Texture2D and SlateTextureAtlasInterface).
- **MainTextId / TooltipTextId / ToastMessageTextId** (`FString`): Localized UI texts for title, hint, and confirmation. *(StringTableKey)*  
- **OverrideScheduleInfoId** (`FName`): ID reference for overriding schedule information. *(Foreign = "ScheduleInfo.Id")*  
- **StartScriptId / CancelScriptId / FinishScriptId** (`FName`): Scripts triggered when the interaction starts, the interaction is canceled, the interaction is completed . *(Foreign = "Script_RabbitHole.Id")*  
- **Tags** (`TArray<FName>`): Tags for categorizing or filtering this rabbit hole.  
- **RabbitHoleInteractionList** (`TArray<FB1RabbitHoleInteraction>`): List of rabbit hole interactions associated with this interaction.  
- **ChoiceCardList** (`TArray<FB1RabbitHoleChoiceCardInfo>`): List of choice cards available for this interaction.


## 📚 References

- [FB1RabbitHoleInteraction](./Struct/FB1RabbitHoleInteraction.md)
- [FB1RabbitHoleChoiceCardInfo](./Struct/FB1RabbitHoleChoiceCardInfo.md)