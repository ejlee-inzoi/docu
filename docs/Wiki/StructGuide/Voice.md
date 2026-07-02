# 📘 Voice Data Guide

## 🧩 Struct: FB1VoiceTableRow

Defines voice sets mapped to growth steps for different ages.

### Properties

- **Id** (`FName`): Unique identifier for the voice set.  
- **InfantId** (`FName`): Voice resource for infants. *(Foreign = "VoiceResources.VoiceSelectMap")*  
- **ToddlerId** (`FName`): Voice resource for toddlers.  *(Foreign = "VoiceResources.VoiceSelectMap")*
- **ChildId** (`FName`): Voice resource for children.  *(Foreign = "VoiceResources.VoiceSelectMap")*
- **LowTeenId** (`FName`): Voice resource for lower teens.  *(Foreign = "VoiceResources.VoiceSelectMap")*
- **HighTeenId** (`FName`): Voice resource for higher teens.  *(Foreign = "VoiceResources.VoiceSelectMap")*
- **YouthId** (`FName`): Voice resource for youth.  *(Foreign = "VoiceResources.VoiceSelectMap")*
- **AdultId** (`FName`): Voice resource for adults.  *(Foreign = "VoiceResources.VoiceSelectMap")*
- **OldId** (`FName`): Voice resource for old characters.  *(Foreign = "VoiceResources.VoiceSelectMap")*
- **ElderlyId** (`FName`): Voice resource for elderly characters.  *(Foreign = "VoiceResources.VoiceSelectMap")*
