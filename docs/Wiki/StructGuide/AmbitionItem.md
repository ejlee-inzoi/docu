# 📘 AmbitionItem Data Guide

## 🧩 Struct: FB1AmbitionItemTableRow

Defines an ambition step entry, including age restrictions, descriptions, and mission steps.

### Properties

- **Id** (`FName`): Unique ID for this ambition item. *(L10N_Name = DisplayTextId, L10N_Desc = DescTextId)*  
- **DisplayTextId** (`FString`): Localization key for display name. *(StringTableKey = "Id")*  
- **DescTextId** (`FString`): Localization key for description. *(StringTableKey = "Id")*  
- **ConditionId** (`FName`): ID of the condition that must be met for this ambition step. *(Foreign = "AmbitionCondition.Id")*  
- **AgeAvailable** (`TArray<EB1GrowthStep>`): Growth stages where this ambition step is valid.  
- **ChangeByGrowthStep** (`TArray<FB1GrowthChangeData>`): Changes that occur as the character grows.  
- **AmbitionSteps** (`TArray<FB1AmbitionStepDefine>`): List of missions required to complete this ambition.  

## 📚 References

- [FB1AmbitionStepDefine](./Struct/FB1AmbitionStepDefine.md)
- [FB1AmbitionStepMissionDefine](./Struct/FB1AmbitionStepMissionDefine.md)
- [EB1GrowthStep](./Enum/EB1GrowthStep.md)
- [FB1GrowthChangeData](./Struct/FB1GrowthChangeData.md)