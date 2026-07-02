## 🧩 Struct: FB1ObjectWeatheringInfo

Defines data related to the weathering system of an object, including degradation over time and pricing impact.

### Properties

- **Grade** (`int32`): Current grade or level of weathering.  
- **WeatheringIntensity** (`float`): Intensity or severity of the current weathering state. (0 = no weathering, 1 = maximum weathering)
- **NextGradeDay** (`int32`): Days until the next weathering grade is reached.  
- **NextGradeDayRandomOffset** (`int32`): Random variation in days added to `NextGradeDay`.  
- **PriceDepreciation** (`float`): Reduction in price value due to weathering ( 0 = no Depreciation, 1 = full Depreciation).  
- **ModifierObjectWeatheringId** (`FName`): The modifier associated with this weathering grade. *(Foreign = "Modifier_ObjectWeathering.Id")*  

## 📚 References

- [Modifier](../Modifier.md)