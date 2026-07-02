# 📘 TraitHopeLife Data Guide

## 🧩 Struct: FB1TraitHopeLifeTableRow

Defines a trait used in hope/life simulations, often age-restricted and behavior-driven.

### Properties

- **Id** (`FName`): Unique identifier for the trait.  
- **Category** (`EB1TraitCategoryType`): Trait category (e.g., Social, Emotional, Physical).  
- **AgeAvailable** (`TArray<EB1GrowthStep>`): List of growth stages where this trait is valid.  
- **AddScriptId** (`FName`): Script triggered when the trait is added. *(Foreign = "Script_Trait.Id")*  
- **RemoveScriptId** (`FName`): Script triggered when the trait is removed. *(Foreign = "Script_Trait.Id")*  
- **TraitScripts** (`TArray<FB1TraitScript>`): Additional behavior logic linked to this trait.  


## 📚 References

- [EB1TraitCategoryType](./Enum/EB1TraitCategoryType.md)
- [FB1TraitScript](./Struct/FB1TraitScript.md)
- [EB1TraitEntryType](./Enum/EB1TraitEntryType.md)
- [EB1GrowthStep](./Enum/EB1GrowthStep.md)
- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)
- [FB1Execute](./Struct/FB1Execute.md)
- [EB1ExecuteType](./Enum/EB1ExecuteType.md)