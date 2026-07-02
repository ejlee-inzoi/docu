# 📘 CityAudioResources Data Guide

## 🧩 Struct: FB1CityAudioResourcesTableRow

Defines background music resources associated with different city states or events.

### Properties

- **Id** (`FName`): Unique identifier for the audio resource set.  
- **SoundResourceMap** (`TMap<EB1CityAudioResourceType, FName>`): Mapping of audio types to BGM audio IDs. *(Foreign = "DT_BGMAudio.Id")*  


## 📚 References

- [EB1CityAudioResourceType](./Enum/EB1CityAudioResourceType.md)