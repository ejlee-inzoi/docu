# 📘 FamilyNamePool Data Guide

## 🧩 Struct: FB1FamilyNamePoolTableRow

Defines a pool of family names by culture.

### Properties

- **Id** (`FName`): Identifier for the name pool.  
- **Culture** (`EB1DiversityCulture`): Culture associated with the names.  
- **Names** (`TArray<FB1NameData>`): List of available family names.  

@include Data/StrcutGuide/Enum/EB1DiversityCulture.md
@include Data/StrcutGuide/Struct/FB1NameData.md