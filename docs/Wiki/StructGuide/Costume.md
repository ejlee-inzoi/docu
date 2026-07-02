# 📘 Costume Data Guide

## 🧩 Struct: FB1CostumeTableRow

Defines a complete costume set, including costume tags and per-gender/age configuration.

### Properties

- **Id** (`FName`): Unique identifier for the costume.  
- **CostumeTags** (`TArray<FName>`): List of tags associated with this costume (used for filtering or logic).  
- **CostumeInfo** (`TArray<FB1CostumeInfo>`): List of costume configurations filtered by gender and age. *(Category = Body)*  


## 📚 References

- [FB1CostumeInfo](./Struct/FB1CostumeInfo.md)
- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)
