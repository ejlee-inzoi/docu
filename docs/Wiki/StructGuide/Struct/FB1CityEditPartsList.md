## 🧩 Struct: FB1CityEditPartsList

Defines a part entry for city editing, including identifiers, display name, color settings, and seasonal variations.

### Properties

- **ListKey** (`FString`): Internal identifier used to group or reference the part configuration.  
- **PartsType** (`FName`): Type of the part used to determine how it is applied (e.g., Leaves, Trunk).  
- **ApplyColorParameterName** (`FName`): Name of the material parameter used to apply color to this part.  
- **DisplayNameTextId** (`FString`): Localization key for the display name of the part. *(StringTableKey)*  
- **BaseColorString** (`FString`): Hex or named color string representing the default color.  
- **InitialColorStringBySeason** (`TMap<EB1SeasonType, FString>`): Map of initial color values based on season.  
- **MaterialSlotNameList** (`TArray<FName>`): List of material slot names to which this part’s color or material should be applied.  

## 📚 References

- [EB1SeasonType](../Enum/EB1SeasonType.md)