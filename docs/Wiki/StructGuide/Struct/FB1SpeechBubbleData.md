## 🧩 Struct: FB1SpeechBubbleData

Defines a speech bubble used in dialogue or interactions, including message text, icon, and display behavior.

### Properties

- **ListKey** (`FString`): Internal identifier for this speech bubble.  
- **MessageTextId** (`FString`): Localization key for the speech bubble text. *(EditCondition: shown only if SpeechBubbleOption ≠ Icon, StringTableKey)*  
- **Icon** (`TSoftObjectPtr<UTexture2D>`): Icon used when the bubble is in icon mode. *(EditCondition = Icon)*  
- **SpeechBubbleOption** (`EB1SpeechBubbleOption`): Mode in which the bubble is displayed (e.g., Basic, Icon, Talking).  
- **IntervalSec** (`float`): Interval between message parts when sequential display is enabled. *(EditCondition = IntervalSequentially, ClampMin = 0.1)*  
- **LifeTime** (`float`): Duration in seconds before the bubble disappears. *(ClampMin = 0.0, ClampMax = 999999.0)*  
- **bOverride** (`bool`): If true, this bubble overrides any existing active one.  
- **Probability** (`float`): Probability (0.0–1.0) that this bubble appears when triggered.  

## 📚 References

- [EB1SpeechBubbleOption](../Enum/EB1SpeechBubbleOption.md)
- [FB1RandomAnimationInfo](./FB1RandomAnimationInfo.md)