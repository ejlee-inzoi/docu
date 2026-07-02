## 🧩 Struct: FB1TraitChemistryList

Defines relationship chemistry data for a given trait selection ID.

### Properties

- **TraitSelectId** (`FName`): Trait selection ID this chemistry list belongs to. *(Foreign = "TraitSelect3.Id")*  
- **ChemistryInfo** (`TArray<FB1ChemistryInfo>`): List of chemistry levels associated with other traits.  

## 📚 References

- [FB1ChemistryInfo](./FB1ChemistryInfo.md)
- [TraitSelect3](../TraitSelect3.md)
