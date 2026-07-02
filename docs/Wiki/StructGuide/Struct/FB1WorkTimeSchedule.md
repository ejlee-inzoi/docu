## ⏰ Struct: FB1WorkTimeSchedule

Defines the working schedule for a specific day, including start/end time, overtime limits, and associated mission.

### Properties

- **DayOfWeek** (`EB1DayOfWeek`): Day of the week the work schedule applies to.
- **StartTime** (`int32`): Start time of the shift (0–23). Represents hour of the day. (ClampMin: 0, ClampMax: 23)
- **EndTime** (`int32`): End time of the shift (0–47). Supports multi-hour shifts into the next day. (ClampMin: 0, ClampMax: 47)
- **MaxExtraWorkMinute** (`int32`): Maximum number of extra work minutes allowed beyond the shift. (ClampMin: 0)
- **WorkMissionId** (`FName`): Optional quest ID associated with the work shift. (Foreign: `Quest.Id`)

## 📚 References

- [EB1DayOfWeek](../Enum/EB1DayOfWeek.md)
- [Quest](../Quest.md)