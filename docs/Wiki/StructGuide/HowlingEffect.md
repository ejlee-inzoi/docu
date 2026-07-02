# 📘 HowlingEffect Data Guide

## 🧩 Struct: FB1HowlingEffectTableRow

Defines the actual howling effects that get applied when a howling event is triggered.

### Properties

- **Id** (`FName`): Unique identifier for the howling effect set.  
- **Cooltime** (`float`): Minimum time between effect triggers. *(ClampMin = 10)*  
- **Effects** (`TArray<FB1HowlingEffect>`): List of effects applied during the howling.  
- **bOnlyForGhost** (`bool`): If true, this howling effect only applies to ghost characters.  


## 📚 References

- [FB1HowlingEffect](./Struct/FB1HowlingEffect.md)
- [FB1HowlingWeightInfo](./Struct/FB1HowlingWeightInfo.md)
- [FB1HowlingModifierSetting](./Struct/FB1HowlingModifierSetting.md)
- [FB1HowlingEffect_Interaction](./Struct/FB1HowlingEffect_Interaction.md)
- [FB1HowlingEffect_Script](./Struct/FB1HowlingEffect_Script.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1ModifierType](./Enum/EB1ModifierType.md)
