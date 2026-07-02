# 📘 CustomMobileMessage Data Guide

## 🧩 Struct: FB1CustomMobileMessageTableRow

Defines a mobile message used in gameplay, including content, answers, scripts, and cooldown behavior.

### Properties

- **Id** (`FName`): Unique identifier for this message.  
- **RelationShipStatId** (`FName`): Relationship stat associated with this message. *(Foreign = "RelationshipStat.Id")*  
- **PositiveAnswerButtonStrId** (`FString`): Text shown on the positive answer button. *(StringTableKey)*  
- **NormalAnswerButtonStrId** (`FString`): Text shown on the neutral answer button. *(StringTableKey)*  
- **NegativeAnswerButtonStrId** (`FString`): Text shown on the negative answer button. *(StringTableKey)*  
- **OpenMessageScript** (`FName`): Script triggered when the message is opened. *(Foreign = "Script_MobileMessage")*  
- **PositiveAnswerScriptId** (`FName`): Script triggered on positive reply. *(Foreign = "Script_MobileMessage")*  
- **NormalAnswerScriptId** (`FName`): Script triggered on neutral reply. *(Foreign = "Script_MobileMessage")*  
- **NegativeAnswerScriptId** (`FName`): Script triggered on negative reply. *(Foreign = "Script_MobileMessage")*  
- **MessageData** (`FB1MobileMessageData`): Full text content and reply structure.  
- **ResponseTimeout** (`int32`): Time limit (in seconds) to respond to the message. `-1` means no timeout.  
- **CooltimeMinute** (`int64`): Cooldown time (in minutes) before this message can appear again.  
- **MobileMessagePartiesId** (`FName`): Party info associated with this message. *(Foreign = "MobileMessageParties")*  
- **UseDelayMessage** (`bool`): If true, uses delay logic before sending the message.  
- **DelayInfo** (`FB1MobileMessageDelayInfo`): Settings for delay conditions and probability.  


## 📚 References

- [FB1MobileMessageData](./Struct/FB1MobileMessageData.md)
- [FB1MobileMessageDelayInfo](./Struct/FB1MobileMessageDelayInfo.md)
- [EB1DayOfWeek](./Enum/EB1DayOfWeek.md)