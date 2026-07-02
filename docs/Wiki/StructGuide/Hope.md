# 📘 Hope Data Guide

## 🧩 Struct: FB1HopeTableRow

Defines a "hope" entry representing a character's personal goal, desire, or life mission.  
Includes its category, display information, conditions, and scripts for activation and completion.

### Properties

- **Id** (`FName`): Unique identifier for the hope entry.  
- **HopeCategory** (`FName`): Category that groups similar hope entries.  
- **SelectConditionId** (`FName`): ID of the condition required to make this hope selectable. *(Foreign = "HopeCondition.Id")*  
- **DisplayTextId** (`FString`): UI name of the hope. *(StringTableKey)*  
- **ReasonDescTextId** (`FString`): Description of why this hope arose. *(StringTableKey)*  
- **DescTextId** (`FString`): Detailed explanation of the hope itself. *(StringTableKey)*  
- **CompleteEffectDescTextId** (`FString`): Text shown when the hope is fulfilled. *(StringTableKey)*  
- **SpeechBubbleId** (`FName`): Optional speech bubble ID shown when the hope appears. *(Foreign = "SpeechBubble_Hope.Id")*  
- **Icon** (`TSoftObjectPtr<UTexture2D>`): Icon representing the hope in the UI.  
- **MissionId** (`FName`): ID of the mission linked to fulfilling this hope. *(Foreign = "Mission_Hope.Id")*  
- **StartScriptId** (`FName`): Script executed when the hope begins. *(Foreign = "Script_Hope.Id")*  
- **CompleteScriptId** (`FName`): Script executed upon hope completion. *(Foreign = "Script_Hope.Id")*  
- **EmotionId** (`FName`): Emotion ID rewarded upon fulfilling a hope. *(Foreign = "Emotion.Id")*  
