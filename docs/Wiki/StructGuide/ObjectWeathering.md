# 📘 ObjectWeathering Data Guide

## 🧩 Struct: FB1ObjectWeatheringTableRow

Defines weathering behavior for an object, including condition stages and effects.

### Properties

- **Id** (`FName`): Unique identifier for the weathering group.  
- **DisplayNameTextId** (`FString`): Localized label shown in UI. *(StringTableKey = "Id")*  
- **WeatheringInfos** (`TArray<FB1ObjectWeatheringInfo>`): Stages or effects applied as the object weathers over time.  


## 📚 References

- [FB1ObjectWeatheringInfo](./Struct/FB1ObjectWeatheringInfo.md)