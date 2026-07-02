## 🧩 Struct: FB1SeasonConfig

Defines simulation parameters for a season, including temperature profile and duration scaling.

### Properties

- **Season** (`EB1SeasonType`): The season this configuration represents (e.g., Spring, Summer).  
- **DurationMultiplier** (`int32`): Multiplier applied to the base season length.  
- **TemperatureDayDelta** (`int32`): Delta used to offset temperature changes by day.  
- **Temperatures** (`TArray<FB1TemperatureConfig>`): List of temperature profiles used during this season.  

## 📚 References

- [EB1SeasonType](../Enum/EB1SeasonType.md)
- [FB1TemperatureConfig](./FB1TemperatureConfig.md)