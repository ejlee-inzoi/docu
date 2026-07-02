## 🧩 Struct: FB1OrganizationRank

Defines rank-specific data within a job, such as title, visibility, and employment configuration.

### Properties

- **ListKey** (`FString`): Internal key for this rank entry.  
- **Rank** (`int32`): Rank of the job position. *(ClampMin = 1)*  
- **JobLevel** (`int32`): Job level. *(ClampMin = 0)*  
- **RankName** (`FString`): Localized name of the rank. *(StringTableKey)*  
- **RankDesc** (`FString`): Localized description of the rank. *(StringTableKey)*  
- **HiddenFromUI** (`bool`): If true, the rank is hidden from the user interface.  
- **RankConditionId** (`FName`): ID of the condition required for promotion to this rank. *(Foreign = "CompanyCondition.Id")*  
- **RankModifierId** (`FName`): ID of the modifier associated with this rank. *(Foreign = "Modifier_Company.Id")*  
- **EmploymentForm** (`EB1EmploymentForm`): Employment type (e.g., FullTime, Freelancer).  
- **SeatGroupObjectCategories** (`TArray<FName>`): Categories of seats assigned to this rank.  
- **Shift** (`TArray<FB1WorkShift>`): Work shift schedule assigned to this rank.  

## 📚 References

- [EB1EmploymentForm](../Enum/EB1EmploymentForm.md)
- [FB1WorkShift](./FB1WorkShift.md)
- [CompanyCondition](../CompanyCondition.md)
- [Modifier](../Modifier.md)