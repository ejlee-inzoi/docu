## 🧩 Struct: FB1RandomAnimationInfo

Defines a random animation with an associated emotion and play chance.

### Properties

- **Animation** (`TSoftObjectPtr<UAnimSequenceBase>`): Animation asset to potentially play.  
- **EmotionId** (`FName`): The ID that must match the character's current emotion in order to trigger the corresponding animation. *(Foreign = "Emotion.Id")*  
- **ChanceToPlay** (`float`): Weight value that the animation will play.  

## 📚 References

- [Emotion](../Emotion.md)