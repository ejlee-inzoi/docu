# 📘 FirstNamePool Data Guide

## 🧩 Struct: FB1FirstNamePoolTableRow

Defines a pool of first names by cultural group.

### Properties

- **Id** (`FName`): Unique identifier for the pool.  
- **Culture** (`EB1DiversityCulture`): Cultural context for the name list.  
- **Names** (`TArray<FB1NameData>`): List of valid first names.  


@include Data/StrcutGuide/Enum/EB1DiversityCulture.md
@include Data/StrcutGuide/Struct/FB1NameData.md
