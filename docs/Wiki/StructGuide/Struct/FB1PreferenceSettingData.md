## 🧩 Struct: FB1PreferenceSettingData

Represents a preference state tied to a character's current emotion and its effect on messaging.

### Properties

- **CurrentEmotionId** (`FName`): Specifies the emotion ID. When a mission is completed, if the player's current emotion matches this value, a popup will be triggered. *(Foreign = "Emotion.Id")*  
- **Like** (`bool`): Determines whether the preference is liked or disliked when the player selects "Yes" in the popup. If TRUE, the preference will be marked as liked; if FALSE, it will be marked as disliked..  
- **AlertMessageId** (`FName`): The ID linked to the alert UI content data.. *(Foreign = "AlertMessage.Id")*  

## 📚 References

- [Emotion](../Emotion.md)
- [AlertMessage](../AlertMessage.md)