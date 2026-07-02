## 🧩 Struct: FB1AnimationInfo

Holds information about an animation asset including gender, growth step, durations, and loop variations.

### Properties

- **Gender** (`EB1GenderType`): Gender type used to select the appropriate animation variant.  
- **AnimGrowthStep** (`EB1AnimGrowthStep`): Growth stage (e.g., Baby, Youth, Adult) that this animation applies to.  
- **Animation** (`TSoftObjectPtr<UAnimMontage>`): The primary animation montage asset.  
- **TotalPlayLength** (`float`): Total duration of the animation montage in seconds.  
- **LoopPlayLength** (`float`): Length of the looping section within the animation, if applicable.  
- **RateScale** (`float`): Speed multiplier for the animation playback.  
- **RandomLoopAnims** (`TArray<FB1RandomAnimationInfo>`): List of alternative loop animations that can be played randomly.  

## 📚 References

- [EB1GenderType](../Enum/EB1GenderType.md)
- [EB1AnimGrowthStep](../Enum/EB1AnimGrowthStep.md)
- [FB1RandomAnimationInfo](./FB1RandomAnimationInfo.md)