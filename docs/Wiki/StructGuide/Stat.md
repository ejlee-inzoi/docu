# 📘 Stat Data Guide

## 🧩 Struct: FB1StatTableRow

Defines a character stat and its behaviors, including decay, desire influence, and UI display.

### Properties

- **Id** (`FName`): Unique identifier for the stat.  
- **StatBasicInfo** (`FB1StatBasicInfo`): Basic settings including type, range, and default value.  
- **StatDisplayInfo** (`FB1StatDisplayInfo`): UI display settings such as name, icon, and tooltips.  
- **StatDecayInfo** (`FB1StatDecayInfo`): Logic for automatic stat decay over time.  
- **StatDesireInfo** (`FB1StatDesireInfo`): Applies priority weights to individual needs to guide decision-making in autonomous behavior.
- **AutoMotiveTimeOffset** (`float`): Time offset applied to desire influence.
- **AutoMotiveSet** (`TArray<FB1StatAutoMotiveSet>`): Defines desire stats based on time of day.
- **StatOnRangeChangedScripts** (`TArray<FB1StatOnRangeChangedScript>`): Scripts triggered when stat enters a specific range.  


## 📚 References

- [FB1StatBasicInfo](./Struct/FB1StatBasicInfo.md)
- [EB1StatType](./Enum/EB1StatType.md)
- [FB1StatDisplayInfo](./Struct/FB1StatDisplayInfo.md)
- [FB1StatRangeDisplayInfo](./Struct/FB1StatRangeDisplayInfo.md)
- [FB1StatDecayInfo](./Struct/FB1StatDecayInfo.md)
- [FB1StatDesireInfo](./Struct/FB1StatDesireInfo.md)
- [FB1StatToDesireGraph](./Struct/FB1StatToDesireGraph.md)
- [FB1StatDesireAgingVariationInfo](./Struct/FB1StatDesireAgingVariationInfo.md)
- [EB1StatServiceTier](./Enum/EB1StatServiceTier.md)
- [FB1StatAutoMotiveSet](./Struct/FB1StatAutoMotiveSet.md)
- [FB1StatOnRangeChangedScript](./Struct/FB1StatOnRangeChangedScript.md)