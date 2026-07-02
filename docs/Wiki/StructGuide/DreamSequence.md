# 📘 DreamSequence Data Guide

## 🧩 Struct: FB1DreamSequenceTableRow

Defines a specific dream sequence, including animation, script logic, and UI media.

### Properties

- **Id** (`FName`): Unique identifier for the dream sequence.  
- **AwakeScriptId** (`FName`): Script executed when the dream ends. *(Foreign = "Script_Dream.Id")*  
- **AwakeBuffId** (`FName`): Buff applied after waking up. *(Foreign = "Buff.Id")*  
- **DreamAnimId** (`FName`): Animation played during the dream. *(Foreign = "DreamAnim.Id")*  
- **VoiceResourceId** (`FName`): Voice clip played during the dream. *(Foreign = "VoiceResources.Id")*  
- **REMStartScriptId** (`FName`): Script triggered at the start of REM sleep. *(Foreign = "Script_Dream.Id")*  
- **Images** (`TArray<TSoftObjectPtr<UObject>>`): List of images displayed during the dream. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
