# 📘 Preference Data Guide

## 🧩 Struct: FB1PreferenceTableRow

Defines a character’s preference for traits or activities, including how it changes over time.

### Properties

- **Id** (`FName`): Unique identifier for this preference.  
- **Category** (`FName`): Logical grouping of the preference (e.g., Food, Hobby).  
- **DisplayInfo** (`FB1PreferenceDisplayInfo`): UI display information including icon and labels.  
- **AgeAvailable** (`TArray<EB1GrowthStep>`): Age stages where this preference applies.  
- **ChangeByGrowthStep** (`TArray<FB1GrowthChangeData>`): Data defining how preference behavior changes with age.  
- **LikePassiveModifierId / DislikePassiveModifierId** (`FName`): Modifiers applied passively when liking or disliking. *(Foreign = "Modifier_Preference.Id")*  
- **LinkedInteractionTag** (`FName`): Tag used to match this preference with interactions.  
- **LikeInteractingBuffId / DislikeInteractingDebuffId** (`FName`): Buffs or debuffs applied during interaction by LinkedInteractionTag. *(Foreign = "Buff.Id")*  
- **PreferenceSettingMissionId** (`FName`): Mission that unlocks or sets this preference. *(Foreign = "Mission_Preference.Id")*  
- **PreferenceSettingDataList** (`TArray<FB1PreferenceSettingData>`): Information that is triggered depending on whether the mission associated with PreferenceSettingMissionId is successfully completed.
- **LikeInteractingFacialExpressionId / DisLikeInteractingFacialExpressionId** (`FName`): Facial expressions triggered during related interactions. *(Foreign = "FacialExpression.Id")*  


## 📚 References

- [FB1PreferenceDisplayInfo](./Struct/FB1PreferenceDisplayInfo.md)
- [EB1GrowthStep](./Enum/EB1GrowthStep.md)
- [FB1GrowthChangeData](./Struct/FB1GrowthChangeData.md)
- [FB1PreferenceSettingData](./Struct/FB1PreferenceSettingData.md)