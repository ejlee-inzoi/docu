## 🏢 Struct: FB1WorkShift

Defines configuration for a single work shift, including staffing, scheduling, and demographic constraints.

### Properties

- **Index** (`int32`): Index value of the shift. Must be 0 or greater. (ClampMin: 0)
- **PrepareStatId** (`FName`): ID reference to a statistic in the `DT_Stat` table. (Foreign: `Stat_Company.Id`)
- **SalaryPerDay** (`int32`): Daily salary provided for this work shift. Must be 0 or greater. (ClampMin: 0)
- **Headcount** (`int32`): Number of employees required. Must be 1 or more. (ClampMin: 1)
- **StartingEmployeeCount** (`int32`): Number of employees assigned at game start. Must be 0 or greater. (ClampMin: 0)
- **StartingSelectGender** (`EB1GenderType`): Gender preselected for some employees at game start.
- **StartingSelectGenderCount** (`int32`): Number of employees assigned the preselected gender. Others will be assigned the opposite gender. (ClampMin: 0)
- **MinGrowthStep** (`EB1GrowthStep`): Minimum growth (age) step of employees at game start.
- **MaxGrowthStep** (`EB1GrowthStep`): Maximum growth (age) step of employees at game start.
- **bRecruitable** (`bool`): Whether this job position can be recruited for.
- **WorkSchedule** (`TArray<FB1WorkTimeSchedule>`): List of scheduled work times for this shift.

## 📚 References

- [EB1GenderType](../Enum/EB1GenderType.md)
- [EB1GrowthStep](../Enum/EB1GrowthStep.md)
- [FB1WorkTimeSchedule](./FB1WorkTimeSchedule.md)
- [Stat](../Stat.md)
