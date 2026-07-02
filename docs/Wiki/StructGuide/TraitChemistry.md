# 📘 TraitChemistry Data Guide

## 🧩 Struct: FB1TraitChemistryTableRow

Defines how different traits interact or produce chemistry in relationships.

### Properties

- **Id** (`FName`): ID of the relationship stat these chemistries apply to. *(Foreign = "RelationshipStat.Id")*  
- **TraitChemistryList** (`TArray<FB1TraitChemistryList>`): List of trait-based chemistry definitions.  


## 📚 References

- [FB1TraitChemistryList](./Struct/FB1TraitChemistryList.md)
- [FB1ChemistryInfo](./Struct/FB1ChemistryInfo.md)
- [EB1RelationshipChemistry](./Enum/EB1RelationshipChemistry.md)