## 🧩 Struct: FB1StatEventTriggerData

Defines a stat-triggered event configuration, specifying the stat range and chance for execution.

### Properties

- **StatName** (`FName`): ID of the stat that triggers the event. *(Foreign = "Stat.Id")*  
- **MinStat** (`int32`): Minimum stat value required to trigger the event.  
- **MaxStat** (`int32`): Maximum stat value that allows the event.  
- **Probability** (`float`): Chance (0.0–1.0) that the event occurs when within range.  
- **EventTime** (`int32`): Time offset when the event is considered.  

## 📚 References

- [Stat](../Stat.md)