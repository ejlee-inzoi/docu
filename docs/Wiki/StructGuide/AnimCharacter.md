# 📘 AnimCharacter Data Guide

## 🧩 Struct: FB1CharacterAnimTableRow

Defines an entry for character animation, including playback target, control flags, and animation list.

### Properties

- **Id** (`FName`): Unique identifier for this animation table row.  
- **PlayingComponentName** (`FName`): Name of the component to play the animation on.  
  *(ModTip = "The name of the PlayingComponent. (B1PlayingComponent::Root, B1PlayingComponent::Head, B1PlayingComponent::Hair)")*  
- **StopOtherComponentOnFinish** (`bool`): If true, other animations on different components are stopped when this animation ends.  
- **AnimInfoList** (`TArray<FB1AnimationInfo>`): List of animations (with gender/growth filters) that define this entry.  

## 📚 References

- [FB1AnimationInfo](./Struct/FB1AnimationInfo.md)
- [FB1RandomAnimationInfo](./Struct/FB1RandomAnimationInfo.md)
- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1AnimGrowthStep](./Enum/EB1AnimGrowthStep.md)