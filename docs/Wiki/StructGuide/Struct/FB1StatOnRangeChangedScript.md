## 🧩 Struct: FB1StatOnRangeChangedScript

Defines a pair of scripts triggered when a stat enters or exits a specified value range.

### Properties

- **From** (`float`): Start of the range (inclusive).  
- **To** (`float`): End of the range (inclusive).  
- **EnterScriptId** (`FName`): Script executed when stat enters this range. *(Foreign = "Script_Stat.Id")*  
- **ExitScriptId** (`FName`): Script executed when stat leaves this range. *(Foreign = "Script_Stat.Id")*  

## 📚 References

- [Script](../Script.md)
