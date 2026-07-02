# 📘 WeatherTrigger Data Guide

## 🧩 Struct: FB1WeatherTriggerTableRow

Defines logic to trigger weather events based on map, script, or simulation data.

### Properties

- **Id** (`FName`): Unique identifier for the weather trigger.  
- **MapId** (`FName`): Map where the weather trigger applies. *(Foreign = "Map.Id", ModTip = "LevelName")*  
- **TriggerType** (`EB1WeatherTriggerType`): Type of trigger used (e.g., SeasonChanged, WeatherChanged).  
- **SubId** (`FName`): Sub-key used to differentiate triggers. (e.g., Summer, Fall) *(SearchLink = TriggerType)*  
- **ScriptIds** (`TArray<FName>`): Scripts executed when the weather is triggered. *(Foreign = "Script_Weather.Id")*  


## 📚 References

- [EB1WeatherTriggerType](./Enum/EB1WeatherTriggerType.md)