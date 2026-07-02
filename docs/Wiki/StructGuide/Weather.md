# 📘 Weather Data Guide

## 🧩 Struct: FB1WeatherTableRow

Defines weather settings and scripts triggered by weather state transitions.

### Properties

- **WeatherTextId** (`FString`): Localized text displayed for this weather. *(Foreign = "Text_Widget.Id")*  
- **WeatherSteps** (`TArray<FB1WeatherDetail>`): List of steps this weather transitions through.  
- **OnStartConditions** (`TArray<FB1Condition>`): Conditions checked when weather starts. If these conditions are met, OnStartScripts will be executed.  
- **OnStartScripts** (`TArray<FB1Execute>`): Scripts executed when weather begins.  
- **OnEndConditions** (`TArray<FB1Condition>`): Conditions checked when weather ends. If these conditions are met, OnEndScripts will be executed.
- **OnEndScripts** (`TArray<FB1Execute>`): Scripts executed when weather ends.  


## 📚 References

- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)

- [FB1Execute](./Struct/FB1Execute.md)
- [EB1ExecuteType](./Enum/EB1ExecuteType.md)