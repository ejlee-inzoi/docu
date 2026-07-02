## 🧩 Struct: FB1SiteSchedule

Defines a work-related schedule for a site, including department, company, timeline, and conditions.

### Properties

- **Id** (`FName`): Unique identifier for this schedule entry.  
- **TimelineName** (`FName`): Name of the timeline this schedule uses. *(Foreign = "Timeline_RelationCrowd_RedCity.Id")* *(ModTip = "Used other Timeline JSON files")*  
- **WorkConditions** (`TArray<FB1Condition>`): Character conditions required to execute the schedule.  
- **CharacterAttributeIdList** (`TArray<FName>`): List of character attribute IDs for filtering candidates.  
- **CompanyId** (`FName`): Company associated with this schedule. *(Foreign = "Company.Id")*  
- **DepartmentKey** (`FB1DepartmentKey`): Department information tied to this schedule.  
- **SiteId** (`FName`): Site where the schedule takes place (auto-generated).  

## 📚 References

- [FB1Condition](./FB1Condition.md)
- [Timeline](../Timeline.md)
- [Company](../Company.md)