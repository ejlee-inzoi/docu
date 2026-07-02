## 🧩 Struct: FB1CostumeInfo

Defines costume and accessory mappings for a character based on gender and body age type.

### Properties

- **GenderType** (`EB1GenderType`): Gender for which this costume applies (e.g., Male, Female).  
- **BodyAgeType** (`EB1BodyAgeType`): Age category of the body (e.g., Baby, Youth, Adult) the costume is designed for.  
- **Outfit** (`TMap<FName, FName>`): Map of outfit type names to specific outfit asset IDs.  
- **Accessories** (`TMap<FName, FName>`): Map of accessory type names to accessory asset IDs.  

## 📚 References

- [EB1GenderType](../Enum/EB1GenderType.md)
- [EB1BodyAgeType](../Enum/EB1BodyAgeType.md)