## 🧩 Struct: FB1EmotionReward

Defines a reward granted based on emotion level range.

### Properties

- **EmotionId** (`FName`): ID of the emotion this reward applies to. *(Foreign = "Emotion.Id")*  
- **LevelFrom** (`int32`): Minimum level required to qualify.  
- **LevelTo** (`int32`): Maximum level allowed to qualify.  
- **Bonus** (`int32`): The bonus value granted if within the range.  

## 📚 References

- [Emotion](../Emotion.md)