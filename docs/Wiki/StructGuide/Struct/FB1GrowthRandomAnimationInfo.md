## 🧩 Struct: FB1GrowthRandomAnimationInfo

Specifies an animation that may randomly play when a character reaches a certain growth stage.

### Properties

- **Animation** (`TSoftObjectPtr<UAnimSequenceBase>`): Animation sequence to play.  
- **GrowthStep** (`EB1GrowthStep`): Growth stage at which this animation may occur.  
- **ChanceToPlay** (`float`): Represents the likelihood of the animation being triggered. The probability is calculated as (this animation's chanceToPlay) divided by the total chanceToPlay of all candidate animations.

## 📚 References

- [EB1GrowthStep](../Enum/EB1GrowthStep.md)
