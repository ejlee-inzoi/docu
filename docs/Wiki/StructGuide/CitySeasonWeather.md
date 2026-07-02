# 📘 CitySeasonWeather Data Guide

## 🧩 Struct: FB1CitySeasonWeatherTableRow

Defines seasonal weather configuration per city, including initial temperature and season progression.

### Properties

- **Id** (`FName`): Unique identifier for this city's seasonal weather config.  
- **StartFirstTemperature** (`int32`): Starting temperature value when simulation begins.  
- **Seasons** (`TArray<FB1SeasonConfig>`): List of seasonal configurations including duration and temperature curves.  


## 📚 References

- [FB1SeasonConfig](./Struct/FB1SeasonConfig.md)
- [FB1TemperatureConfig](./Struct/FB1TemperatureConfig.md)
- [FB1WeatherConfig](./Struct/FB1WeatherConfig.md)
- [EB1WeatherType](./Enum/EB1WeatherType.md)
- [EB1SeasonType](./Enum/EB1SeasonType.md)