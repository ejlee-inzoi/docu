# 📘 TalkRandomPool Data Guide

## 🧩 Struct: FB1TalkRandomPoolTableRow

Defines pools of random animations or expressions for both the speaker and listener in a talk interaction.

### Properties

- **Id** (`FName`): Unique identifier for the random talk pool.  
- **SpeakerPool** (`FB1TalkRolePool`): Animation pool used by the speaker.  
- **ListenerPool** (`FB1TalkRolePool`): Animation pool used by the listener.  
- **FinishScriptPool** (`TArray<FName>`): List of scripts executed at the end of a random talk. *(Foreign = "Script_Talk.Id")*  


## 📚 References

- [FB1TalkRolePool](./Struct/FB1TalkRolePool.md)
- [FB1BodyAnimInfo](./Struct/FB1BodyAnimInfo.md)