## 🧩 Struct: FB1MobileMessageData

Defines a mobile message and the possible reply options for interactive scenarios.

### Properties

- **ListKey** (`FString`): Internal identifier for the message entry.  
- **MessageStrId** (`FString`): Localization key for the message content. *(StringTableKey)*  
- **PositiveAnswerStrId** (`FString`): Localization key for the positive answer text. *(StringTableKey)*  
- **NormalAnswerStrId** (`FString`): Localization key for the neutral answer text. *(StringTableKey)*  
- **NegativeAnswerStrId** (`FString`): Localization key for the negative answer text. *(StringTableKey)*  
- **PositiveAnswerReplyStrId** (`FString`): Localization key for the reply to a positive answer. *(StringTableKey)*  
- **NormalAnswerReplyStrId** (`FString`): Localization key for the reply to a neutral answer. *(StringTableKey)*  
- **NegativeAnswerReplyStrId** (`FString`): Localization key for the reply to a negative answer. *(StringTableKey)*  
- **bIsNeedConvertMessage** (`bool`): If true, checks whether the message text includes site names.  
