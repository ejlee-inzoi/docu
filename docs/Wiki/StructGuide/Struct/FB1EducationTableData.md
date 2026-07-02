## 🧩 Struct: FB1EducationTableData

Defines the relationship between education type, growth stage, and available jobs.

### Properties

- **EducationType** (`EB1EducationType`): The type of education this entry represents.  
- **GrowthStep** (`EB1GrowthStep`): The growth stage (e.g., Youth, Adult) at which this education applies.  
- **JobIdList** (`TArray<FName>`): List of job IDs available during this education period. *(Foreign = "Job.Id")*  

## 📚 References

- [EB1EducationType](../Enum/EB1EducationType.md)
- [EB1GrowthStep](../Enum/EB1GrowthStep.md)
- [Job](../Job.md)