# 📘 Family Data Guide

## 🧩 Struct: FB1FamilyTableRow

Defines a family template, including map location, display texts, and members.

### Properties

- **Id** (`FName`): Unique identifier for the family entry.  
- **MapId** (`FName`): Map where the family is located. *(Foreign = "Map.Id")*  
- **FamilyNameTextId** (`FString`): Localized name. *(StringTableKey = "Id")*  
- **DescriptionTextId** (`FString`): Localized description. *(StringTableKey = "Id")*  
- **TextureId** (`FName`): Image shown for this family. *(Foreign = "B1Texture2D.Id")*  
- **CurrencyDatas** (`TArray<FB1CurrencyDefaultData>`): Starting currencies.  
- **FamilyMemberAttributeIdList** (`TArray<FName>`): Attributes assigned to family members.  
- **IsRandomGenerate** (`bool`): If true, the family is generated randomly.  


## 📚 References

- [FB1CurrencyDefaultData](./Struct/FB1CurrencyDefaultData.md)