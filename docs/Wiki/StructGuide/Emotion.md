# 📘 Emotion Data Guide

## 🧩 Struct: FB1EmotionTableRow

Defines emotion types used in the simulation, including activation thresholds, UI display, and level-based effects.

### Properties

- **Id** (`FName`): Unique identifier for the emotion.  
- **Type** (`EB1EmotionType`): Category or class of the emotion (e.g., Excited, Sad).  
- **Tendency** (`EB1EmotionTendency`): Behavioral tendency (e.g., Natural, Positive, Negative).  
- **ActivateValue** (`int32`): Value threshold at which this emotion becomes active.  
- **UIOrder** (`int32`): Determines the display order in the UI; -1 means hidden.  
- **Icon** (`TSoftObjectPtr<UObject>`): Icon representing this emotion in UI. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **EmotionLevelDatas** (`TArray<FB1EmotionLevelData>`): Emotion levels and their effects (color, modifiers, scripts).  
- **AdmitDesireBuffLevelDatas** (`TArray<FB1AdmitDesireBuffLevelData>`): Buff effects linked to desire-emotion relationships.  


## 📚 References

- [FB1EmotionLevelData](./Struct/FB1EmotionLevelData.md)
- [FB1AdmitDesireBuffLevelData](./Struct/FB1AdmitDesireBuffLevelData.md)
- [EB1EmotionType](./Enum/EB1EmotionType.md)
- [EB1EmotionTendency](./Enum/EB1EmotionTendency.md)
