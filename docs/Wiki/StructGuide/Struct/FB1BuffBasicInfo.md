## 🧩 Struct: FB1BuffBasicInfo

Defines the core configuration of a buff, including its duration, ticking logic, emotional effects, and metadata for tagging and visualization.

### Properties

- **IsEssential** (`bool`): If true, the buff will not be removed during forced resets (e.g., leaving a site, vehicle crash).  
- **Duration** (`float`): Total duration the buff remains active. `-1` means infinite duration. *(ClampMin = -1)*  
- **TickInterval** (`float`): Time in seconds between each tick update. *(ClampMin = 0)*  
- **ScriptInterval** (`float`): Time in seconds between script executions tied to the buff. *(ClampMin = 0)*  
- **EmotionId** (`FName`): ID of the emotion affected by this buff. *(Foreign = "Emotion.Id")*  
- **EmotionValue** (`int32`): Value applied to the emotion. *(ClampMin = 0)*  
- **Tags** (`TArray<FName>`): List of tags that describe the buff’s gameplay semantics.  
- **TagIconId** (`FName`): ID of the icon representing this buff’s tag in UI. *(Foreign = "B1Texture2D.Id")*  

## 📚 References

- [B1Texture2D](../B1Texture2D.md)
- [Emotion](../Emotion.md)