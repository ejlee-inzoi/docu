# 📘 Dream Data Guide

## 🧩 Struct: FB1DreamTableRow

Defines dream behavior tied to age and dream selection logic.

### Properties

- **Id** (`FName`): Unique identifier for the dream entry.  
- **AgingConditionFlags** (`int32`): Bitmask indicating which growth stages this dream applies to. *(BitmaskEnum = EB1GrowthStep)*  
- **DreamInfo** (`FB1DreamInfo`): Data that controls how the dream is selected or generated.  


## 📚 References

- [FB1DreamInfo](./Struct/FB1DreamInfo.md)
- [FB1DreamPoolSelection](./Struct/FB1DreamPoolSelection.md)
- [EB1GrowthStep](./Enum/EB1GrowthStep.md)
