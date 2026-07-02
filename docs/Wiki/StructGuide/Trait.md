# 📘 Trait Data Guide

## 🧩 Struct: FB1TraitTableRow

Defines a trait that can be assigned to a character, including metadata, conditions, and behavior logic.

### Properties

- **Id** (`FName`): Unique identifier for the trait.  
- **Category** (`EB1TraitCategoryType`): Category this trait belongs to.  
- **TraitNameTextId** (`FString`): Text ID for the trait name. *(StringTableKey = "Id")*  
- **TraitDescTextId** (`FString`): Text ID for the trait description. *(StringTableKey = "Id")*  
- **SymbolIcon** (`TSoftObjectPtr<UTexture2D>`): Icon representing the trait.
- **TraitValuePointId** (`FName`): Unique identifier for the trait value point. *(Foreign = "TraitValuePoint.Id")*  
- **PerspectiveIdList** (`TArray<FName>`): List of perspective IDs related to the trait. *(Foreign = "Trait.Id")*  
- **KeywordInfoList** (`TArray<FB1TraitKeywordInfo>`): List of keyword information related to the trait.  
- **FeatureInfoList** (`TArray<FB1TraitFeatureInfo>`): List of feature information related to the trait.
- **AgeAvailable** (`TArray<EB1GrowthStep>`): List of growth steps where this trait is available.  
- **ChangeByGrowthStep** (`TArray<FB1GrowthChangeData>`): List of changes that occur based on growth steps.
- **AddTraitScriptId** (`FName`): ID referencing an additional trait script in DT_Script_Trait. *(Foreign = "Script_Trait.Id")*  
- **RemoveTraitScriptId** (`FName`): ID referencing a removal trait script in DT_Script_Trait. *(Foreign = "Script_Trait.Id")*  
- **RelatedPreferenceId** (`FName`): ID referencing a related preference in DT_Preference. *(Foreign = "Preference.Id")*  
- **TraitScripts** (`TArray<FB1TraitScript>`): List of scripts related to the trait. *(Foreign = "Script_Trait.Id")*  


## 📚 References

- [FB1TraitKeywordInfo](./Struct/FB1TraitKeywordInfo.md)
- [FB1TraitFeatureInfo](./Struct/FB1TraitFeatureInfo.md)
- [FB1GrowthChangeData](./Struct/FB1GrowthChangeData.md)

- [EB1GrowthStep](./Enum/EB1GrowthStep.md)
- [FB1TraitScript](./Struct/FB1TraitScript.md)
- [EB1TraitEntryType](./Enum/EB1TraitEntryType.md)
- [EB1TraitCategoryType](./Enum/EB1TraitCategoryType.md)
- [EB1TraitEventTriggerType](./Enum/EB1TraitEventTriggerType.md)

- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)

- [FB1Execute](./Struct/FB1Execute.md)
- [EB1ExecuteType](./Enum/EB1ExecuteType.md)