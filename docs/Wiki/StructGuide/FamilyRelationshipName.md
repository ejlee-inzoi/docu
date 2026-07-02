# 📘 FamilyRelationshipName Data Guide

## 🧩 Struct: FB1FamilyRelationshipNameTableRow

Defines localized relationship terms between characters for different gender combinations and simplified forms.

### Properties

- **Id** (`FName`): Unique identifier for this relationship label set.  
- **DefaultTextId** (`FString`): Text shown when gender context is not specified. *(StringTableKey)*  
- **MaleToMaleTextId** (`FString`): Label used when a male refers to another male. *(StringTableKey)*  
- **FemaleToMaleTextId** (`FString`): Label used when a female refers to a male. *(StringTableKey)*  
- **MaleToFemaleTextId** (`FString`): Label used when a male refers to a female. *(StringTableKey)*  
- **FemaleToFemaleTextId** (`FString`): Label used when a female refers to another female. *(StringTableKey)*  
- **SimplifiedDefaultTextId** (`FString`): Simplified label when no gender is specified. *(StringTableKey)*  
- **SimplifiedMaleToMaleTextId** (`FString`): Simplified label for male-to-male reference. *(StringTableKey)*  
- **SimplifiedFemaleToMaleTextId** (`FString`): Simplified label for female-to-male reference. *(StringTableKey)*  
- **SimplifiedMaleToFemaleTextId** (`FString`): Simplified label for male-to-female reference. *(StringTableKey)*  
- **SimplifiedFemaleToFemaleTextId** (`FString`): Simplified label for female-to-female reference. *(StringTableKey)*  
