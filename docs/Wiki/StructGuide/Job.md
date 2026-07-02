# 📘 Job Data Guide

## 🧩 Struct: FB1JobTableRow

Defines a job or profession, including its type, scripts, levels, and promotion paths.

### Properties

- **Id** (`FName`): Unique identifier for the job type.  
- **JobType** (`EB1JobType`): Classification of this job (e.g., Normal, Student).  
- **DisplayNameTextId** (`FString`): Localized name of the job. *(StringTableKey = "Id")*  
- **RetirementTextId** (`FString`): Localized message shown when retiring from this job. *(StringTableKey)*  
- **EnterScriptId** (`FName`): Script executed when entering this job. *(Foreign = "Script_Job.Id")*  
- **LeaveScriptId** (`FName`): Script executed when leaving this job. *(Foreign = "Script_Job.Id")*  
- **JobPromotions** (`TArray<FName>`): List of job IDs this one can promote into. *(Foreign = "Job.Id")*  
- **Levels** (`TArray<FB1JobLevel>`): Job level configurations, including conditions and rewards.  


## 📚 References

- [FB1JobLevel](./Struct/FB1JobLevel.md)
- [EB1JobType](./Enum/EB1JobType.md)
- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)