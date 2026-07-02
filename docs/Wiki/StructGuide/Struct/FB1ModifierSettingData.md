## 🧩 Struct: FB1ModifierSettingData

Defines a stat or condition modifier including its calculation type and value.

### Properties

- **ModifierType** (`EB1ModifierType`): Type of modifier (e.g., Stat, EmotionBuffTime, Weathering).  
- **ModifierKey** (`FName`): Specifies which key within the stat defined by ModifierType the modifier value should be applied to.. *(SearchLink = "FB1ModifierSettingData.ModifierType")*  
- **ModifierCalcType** (`EB1ModifierOperationType`): Defines how the modifier is calculated (e.g., Add, Multiply).  /
- **Value** (`float`): The numeric value applied by this modifier.  

## 📚 References

- [EB1ModifierType](../Enum/EB1ModifierType.md)
- [EB1ModifierOperationType](../Enum/EB1ModifierOperationType.md)