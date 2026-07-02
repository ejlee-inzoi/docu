# 📘 GenderVoiceSelection Data Guide

## 🧩 Struct: FB1GenderVoiceSelectionTableRow

Defines a list of voice IDs selectable for a specific gender during character customization.

### Properties

- **Id** (`FName`): Unique identifier for the voice selection entry.  
- **VoiceIdList** (`TArray<FName>`): List of available voice IDs. *(Foreign = "Voice.Id")*  
