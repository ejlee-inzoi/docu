## 🧩 Struct: FB1CityEditStabilityModifierInfo

Defines a modifier entry that influences city stability based on certain decoration or environmental configurations.

### Properties

- **Id** (`FName`): Unique identifier for this stability modifier entry.  
- **ListKey** (`FString`): Internal key used for referencing the modifier configuration.  
- **MinRate** (`float`): Minimum rate applied by this modifier (often used for clamping or blending).  
- **MaxRate** (`float`): Maximum rate this modifier can reach.  
- **CenterRate** (`float`): Target or optimal rate around which this modifier stabilizes.  
