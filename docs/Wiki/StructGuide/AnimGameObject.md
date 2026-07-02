# 📘 AnimGameObject Data Guide

## 🧩 Struct: FB1GameObjectAnimTableRow

Defines an animation table row for game objects, including playback component and animation variations.

### Properties

- **Id** (`FName`): Unique identifier for this animation entry (used as the table row name).  
- **PlayingComponentName** (`FName`): Name of the component where the animation will play.  
  *(ModTip = "The name of the PlayingComponent. (B1PlayingComponent::Root, B1PlayingComponent::Head, B1PlayingComponent::Hair)")*  
- **AnimInfoList** (`TArray<FB1AnimationInfo>`): List of animation entries filtered by gender and growth step.  

## 📚 References

- [FB1AnimationInfo](./Struct/FB1AnimationInfo.md)
- [FB1RandomAnimationInfo](./Struct/FB1RandomAnimationInfo.md)
- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1AnimGrowthStep](./Enum/EB1AnimGrowthStep.md)