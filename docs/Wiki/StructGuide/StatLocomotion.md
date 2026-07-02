# 📘 StatLocomotion Data Guide

## 🧩 Struct: FB1StatLocomotionTableRow

Defines locomotion animations driven by stat values such as energy or mood.

### Properties

- **Id** (`FName`): Unique identifier for the locomotion entry.  
- **Gender** (`EB1GenderType`): Gender that this locomotion set applies to.  
- **AnimGrowthStep** (`EB1AnimGrowthStep`): Growth stage this animation is valid for.  
- **StatLocomotions** (`TArray<FB1StatLocomotionAnimInfo>`): List of locomotion variations based on stat thresholds.  


## 📚 References

- [FB1StatLocomotionAnimInfo](./Struct/FB1StatLocomotionAnimInfo.md)
- [FB1RandomAnimationInfo](./Struct/FB1RandomAnimationInfo.md)
- [EB1AnimGrowthStep](./Enum/EB1AnimGrowthStep.md)
- [EB1GenderType](./Enum/EB1GenderType.md)