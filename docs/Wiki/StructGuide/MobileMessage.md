# 📘 MobileMessage Data Guide

## 🧩 Struct: FB1MobileMessageTableRow

Defines a mobile message entry shown to the player, including button text, response scripts, and message content.

### Properties

- **Id** (`FName`): Unique identifier for this message.  
- **RelationShipStatId** (`FName`): Relationship stat that this message is tied to. *(Foreign = "MobileMessageReward.Id")*  
- **ConditionId** (`FName`): Condition that must be satisfied for the message to send. *(Foreign = "MobileMessageCondition.Id")*  
- **PositiveAnswerButtonStrId** (`FString`): Localized text for the "positive" answer button. *(StringTableKey)*  
- **NormalAnswerButtonStrId** (`FString`): Localized text for the "neutral" answer button. *(StringTableKey)*  
- **NegativeAnswerButtonStrId** (`FString`): Localized text for the "negative" answer button. *(StringTableKey)*  
- **OpenMessageScript** (`FName`): Script executed when the message opens. *(Foreign = "Script_MobileMessage.Id")*  
- **PositiveAnswerScriptId** (`FName`): Script executed when the player selects the positive response. *(Foreign = "Script_MobileMessage.Id")*  
- **NormalAnswerScriptId** (`FName`): Script executed when the player selects the neutral response. *(Foreign = "Script_MobileMessage.Id")*  
- **NegativeAnswerScriptId** (`FName`): Script executed when the player selects the negative response. *(Foreign = "Script_MobileMessage.Id")*  
- **MessageStrIdList** (`TArray<FB1MobileMessageData>`): List of text messages and their localizations displayed during this interaction.  


## 📚 References

- [FB1MobileMessageData](./Struct/FB1MobileMessageData.md)