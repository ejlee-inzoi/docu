# 📘 Howling Data Guide

## 🧩 Struct: FB1HowlingTableRow

Defines a howling trigger configuration. Howlings are area-based effects triggered by characters or objects.

### Properties

- **Id** (`FName`): Unique identifier for this howling entry.  
- **bAllowObject** (`bool`): If true, game objects are included as part of the target set.
- **bAllowCharacter** (`bool`): If true, characters are included as part of the target set.
- **bImmediate** (`bool`): If true, the effect is applied immediately.  
- **bFilterSameSite** (`bool`): If true, Filters only targets located within the same lot as the Howling Generator. All additional range conditions are disregarded.
- **FiltersInfo** (`FB1TargetFilters`): Targeting filters to determine valid receivers.  
- **EffectsInfo** (`FB1EffectsInfo`): Effects applied to targets.  
- **FrequencyInfo** (`FB1FrequencyInfo`): Sets the frequency and trigger method of the howling effect.
- **bCheckLineTrace** (`bool`): Whether line trace is required for the effect to reach targets.  


## 📚 References

- [FB1TargetFilters](./Struct/FB1TargetFilters.md)
- [EB1HowlingEmitterType](./Enum/EB1HowlingEmitterType.md)
- [EB1HowlingFrequencyType](./Enum/EB1HowlingFrequencyType.md)
