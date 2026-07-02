# 📘 Locomotion Data Guide

## 🧩 Struct: FB1LocomotionTableRow

Defines locomotion animations for characters, including idle, walk, jog, and turns based on gender and growth.

### Properties

- **Id** (`FName`): Unique identifier for this locomotion set.  
- **Gender** (`EB1GenderType`): Gender this locomotion set applies to.  
- **AnimGrowthStep** (`EB1AnimGrowthStep`): Growth step this animation applies to.  
- **IdleAnim** (`TSoftObjectPtr<UAnimSequenceBase>`): Default idle animation.  
- **IdleRandomAnims** (`TArray<FB1EmotionRandomAnimationInfo>`): List of emotion-driven idle variations.  
- **WalkStartAnims** (`TMap<EB1Anim_Direction, TSoftObjectPtr<UAnimSequenceBase>>`): Start animations for each walking direction.  
- **WalkAnim** (`TSoftObjectPtr<UAnimSequenceBase>`): Default walking animation.  
- **WalkRandomAnims** (`TArray<FB1GrowthRandomAnimationInfo>`): Randomized walking variants.  
- **WalkSlopeAnims** (`TMap<EB1Anim_Slope, TSoftObjectPtr<UAnimSequenceBase>>`): Walking animations adapted to terrain slope.  
- **MinWalkLoopCount** (`int`): Minimum number of looped walking animations.  
- **MaxWalkLoopCount** (`int`): Maximum number of looped walking animations.  
- **WalkStop_Block / WalkStop_LF / WalkStop_RF**: Stopping animations from walk.  
- **WalkToJog_LF / WalkToJog_RF**: Transition animations from walk to jog.  
- **WalkTurn_LF / WalkTurn_RF**: Turning animations while walking.  
- **JogAnim** (`TSoftObjectPtr<UAnimSequenceBase>`): Default jogging animation.  
- **JogStartAnims** (`TMap<EB1Anim_Direction, TSoftObjectPtr<UAnimSequenceBase>>`): Jogging start animations by direction.  
- **JogStop_Block / JogStop**: Jogging stop animations.  
- **JogToWalk_LF / JogToWalk_RF**: Transition animations from jog to walk.  
- **JogTurn_LF / JogTurn_RF**: Turning while jogging animations.  
- **TurnStops / TurnInPlaces** (`TMap<EB1Anim_TurnStop, TSoftObjectPtr<UAnimMontage>>`): Stop and  Stopping with a step forward montages.  
- **OneSteps** (`TMap<EB1Anim_OneStep, TSoftObjectPtr<UAnimMontage>>`): One-step movement animations.  


## 📚 References

- [FB1EmotionRandomAnimationInfo](./Struct/FB1EmotionRandomAnimationInfo.md)
- [FB1GrowthRandomAnimationInfo](./Struct/FB1GrowthRandomAnimationInfo.md)
- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1AnimGrowthStep](./Enum/EB1AnimGrowthStep.md)
- [EB1Anim_Direction](./Enum/EB1Anim_Direction.md)
- [EB1Anim_Slope](./Enum/EB1Anim_Slope.md)
- [EB1Anim_TurnStop](./Enum/EB1Anim_TurnStop.md)
- [EB1Anim_OneStep](./Enum/EB1Anim_OneStep.md)