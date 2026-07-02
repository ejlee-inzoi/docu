# 📘 GameObjectSound Data Guide

## 🧩 Struct: FB1GameObjectSoundTableRow

Defines sound resources associated with a game object, such as sound cues triggered by animation notifies or scripted events.

### Properties

- **Id** (`FName`): Unique identifier for this sound mapping entry, typically used as the row key in the data table.  
- **SoundNotifyMap** (`TMap<FName, TSoftObjectPtr<UMetaSoundSource>>`): Map of notify event names (e.g., `Open`, `Close`) to their corresponding MetaSound assets. This allows context-sensitive sounds to play during gameplay events.  
