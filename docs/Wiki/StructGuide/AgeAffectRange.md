# 📘 AgeAffectRange Data Guide

## 🧩 Struct: FB1AgeAffectRangeTableRow

Defines a table row that contains a list of effects applied at specific age growth steps.

### Properties

- **Id** (`FName`): Unique identifier for this age affect entry (used as the row name).  
- **AffectInfos** (`TArray<FB1AgeAffectInfo>`): List of effects applied during specific growth steps.  

## 📚 References

- [FB1AgeAffectInfo](./Struct/FB1AgeAffectInfo.md)
- [EB1GrowthStep](./Enum/EB1GrowthStep.md)