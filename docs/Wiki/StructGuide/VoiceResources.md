# 📘 VoiceResources Data Guide

## 🧩 Struct: FB1VoiceResourcesTableRow

Defines a mapping between trait IDs and their MetaSound voice assets.

### Properties

- **Id** (`FName`): Unique identifier for this voice resource entry.  
- **VoiceSelectMap** (`TMap<FName, TSoftObjectPtr<UMetaSoundSource>>`): Mapping of trait or context IDs to voice assets. *(Foreign = "Voice.Id")*  
