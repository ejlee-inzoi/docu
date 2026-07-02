# 📘 Aging Data Guide

## 🧩 Struct: FB1AgingTableRow

A table row struct that stores data for each aging stage.  
It includes information such as stat ranges, appearance presets, taxes, and more for each age stage.

### Properties

- **Id** (`FName`): Unique identifier for this aging entry. *(L10N_Name = DisplayTextId, L10N_Desc = DescTextId)*  
- **DisplayTextId** (`FString`): Localization key for the display name. *(StringTableKey = "Id")*  
- **DescTextId** (`FString`): Localization key for the age stage description. *(StringTableKey = "Id")*  
- **TimeToNextAge** (`int32`): Time in seconds required to transition to the next growth stage.  
- **StatMax** (`float`): Maximum stat value reachable during this age stage.  
- **StatMin** (`float`): Minimum stat value for this age stage.  
- **NPCStatMin** (`float`): Minimum stat value for NPCs in this age stage.  
- **ContentAvailableSlot** (`TMap<FString, int32>`): Map defining available content slots for this age stage..  
- **AppearancePreset** (`TMap<EB1GenderType, FName>`): Preset appearances based on gender type.  
- **StandardWeight** (`TMap<EB1GenderType, float>`): Standard weight based on gender type.  
- **TaxPerPerson** (`int32`): Tax amount per person in this age stage.

## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)