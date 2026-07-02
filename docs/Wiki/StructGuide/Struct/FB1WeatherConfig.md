## 🧩 Struct: FB1WeatherConfig

Defines a weather configuration entry, including its type and intensity ratios across steps.

### Properties

- **Weather** (`EB1WeatherType`): The type of weather being configured (e.g., Sun, Rain, Snow).  
- **Ratio** (`float`): Weight value for this weather type to appear.  
- **Step1_Ratio** (`float`): Intensity ratio for step 1 (light). *(Category = "Weather Step Intensity")*  
- **Step2_Ratio** (`float`): Intensity ratio for step 2 (medium). *(Category = "Weather Step Intensity")*  
- **Step3_Ratio** (`float`): Intensity ratio for step 3 (heavy). *(Category = "Weather Step Intensity")*  

## 📚 References

- [EB1WeatherType](../Enum/EB1WeatherType.md)