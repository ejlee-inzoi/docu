# 📘 CityEditStability Data Guide

## 🧩 Struct: FB1CityEditStabilityTableRow

Defines stability values and visual/UI controls for city edit sliders.

### Properties

- **Id** (`FName`): Unique identifier for this stability entry.  
- **DisplayTextId** (`FString`): UI label shown for this slider. *(StringTableKey = "Id")*  
- **DescriptionTextId** (`FString`): Description shown in tooltips or side panels. *(StringTableKey = "Id")*  
- **ModifierInfos** (`TArray<FB1CityEditStabilityModifierInfo>`): Modifiers affecting stability based on decoration, time, etc.  
- **DefaultMinRate** (`float`): Default minimum value allowed for this slider.  
- **DefaultMaxRate** (`float`): Default maximum value allowed for this slider.  
- **DefaultSliderValue** (`float`): Initial slider value (0.0–1.0). *(ClampMin = 0, ClampMax = 1)*  
- **bMPCType** (`bool`): If true, this slider modifies a Material Parameter Collection (MPC).  
- **MPCParamName** (`FName`): Name of the MPC parameter affected by this slider.  


## 📚 References

- [FB1CityEditStabilityModifierInfo](./Struct/FB1CityEditStabilityModifierInfo.md)