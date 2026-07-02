## 🧩 Struct: FB1MissionConditionData

Defines a condition that must be satisfied to progress or complete a mission objective.

### Properties

- **ConditionType** (`EB1MissionCondition`): The type of mission condition (e.g., stat check, interaction count).  
- **GoalCount** (`int32`): Number of times the condition must be met to succeed. *(ClampMin = 1)*  
- **ConditionId1** (`FName`): Primary content ID relevant to the condition. *(SearchLink = "FB1MissionConditionData.ConditionType")*  
- **ConditionId2** (`FName`): Secondary ID used by some condition types.  
- **ConditionInt** (`int32`): An integer value used in numeric comparisons.  
- **DescTextId** (`FString`): Localization key for describing this condition in the UI. *(StringTableKey)*  

## 📚 References

- [EB1MissionCondition](../Enum/EB1MissionCondition.md)