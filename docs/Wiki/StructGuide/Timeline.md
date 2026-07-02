# 📘 Timeline Data Guide

## 🧩 Struct: FB1TimelineTableRow

Defines scheduled tasks and daily routines for entities, used for simulation and planning.

### Properties

- **Id** (`FName`): Unique identifier for the timeline.  
- **IsAutoBuildSchedule** (`bool`): If true, the schedule is auto-generated.  
- **Priority** (`int32`): Schedule priority used when multiple overlap.  
- **AvaliableDayOfWeeks** (`TArray<EB1DayOfWeek>`): Days this timeline is allowed to run.  
- **CompanyId** (`FName`): Company associated with this timeline. *(Foreign = "Company.Id")*  
- **CityId** (`FName`): City or level this timeline is assigned to. *(ModTip = "LevelName")*  
- **Conditions** (`TArray<FB1Condition>`): Logic rules that control availability.  
- **Schedules** (`TArray<FB1ScheduleDetail>`): List of daily schedules this timeline consists of.  
- **AvaliableDayOfWeeksBitFlags** (`uint8`): Internal bitmask version of the allowed days.  


## 📚 References

- [FB1ScheduleDetail](./Struct/FB1ScheduleDetail.md)
- [FB1Order](./Struct/FB1Order.md)
- [EB1OrderType](./Enum/EB1OrderType.md)
- [FB1RandomOrderInteraction](./Struct/FB1RandomOrderInteraction.md)
- [EB1DayOfWeek](./Enum/EB1DayOfWeek.md)

- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)