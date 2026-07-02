## 🧩 Struct: FB1TemperatureConfig

Defines temperature configuration used for climate simulation or weather selection logic.

### Properties

- **MinTemperature** (`int32`): Minimum temperature in degrees.  
- **MaxTemperature** (`int32`): Maximum temperature in degrees.  
- **Ratio** (`float`): Weight value for this temperature setting to apply.  
- **Weathers** (`TArray<FB1WeatherConfig>`): List of weather configurations associated with this temperature range.  

## 📚 References

- [FB1WeatherConfig](./FB1WeatherConfig.md)