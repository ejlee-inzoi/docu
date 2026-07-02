## 🧩 Struct: FB1QualityData

Defines display and behavior data associated with an item's quality level.

### Properties

- **Quality** (`EB1Quality`): The quality classification (e.g., Bad, Good, Superb).  
- **StateGroupId** (`FName`): ID of the state group associated with this quality.  
- **StateId** (`FName`): ID of the specific state associated with this quality.  
- **PlaySuccessAnimationWeight** (`float`): Weight used to determine how likely a success animation will play.  
- **PlayIdleAnimationWeight** (`float`): Weight used for idle animation selection at this quality.  
- **Price** (`float`): The price is defined as a multiplier relative to a base value, rather than a fixed or absolute amount.  

## 📚 References

- [EB1Quality](../Enum/EB1Quality.md)