## 🧩 Struct: FB1EmotionRandomAnimationInfo

Defines a random animation tied to an emotion and level, with a chance of playing.

### Properties

- **Animation** (`TSoftObjectPtr<UAnimSequenceBase>`): The animation sequence to play.  
- **EmotionId** (`FName`): ID of the emotion that triggers the animation. *(Foreign = "Emotion.Id")*  
- **EmotionLevel** (`int32`): emotion level required to trigger the animation.  
- **ChanceToPlay** (`float`): Represents the likelihood of the animation being triggered. The probability is calculated as (this animation's chanceToPlay) divided by the total chanceToPlay of all candidate animations.

## 📚 References

- [Emotion](../Emotion.md)