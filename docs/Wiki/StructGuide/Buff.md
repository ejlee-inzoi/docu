# 📘 Buff Data Guide

## 🧩 Struct: FB1BuffTableRow

Defines a buff entry used to apply temporary effects, including visual and scripting logic.

### Properties

- **Id** (`FName`): Unique identifier for the buff.  
- **BuffBasicInfo** (`FB1BuffBasicInfo`): Basic configuration including duration, tags, and emotions.  
- **BuffDisplayInfo** (`FB1BuffDisplayInfo`): UI display configuration for the buff.  
- **AddScriptIdList** (`TArray<FName>`): Scripts executed when the buff is applied. *(Foreign = "Script_Buff.Id")*  
- **CancelScriptIdList** (`TArray<FName>`): Scripts executed when the buff is canceled. *(Foreign = "Script_Buff.Id")*  
- **FinishScriptIdList** (`TArray<FName>`): Scripts executed when the buff expires naturally. *(Foreign = "Script_Buff.Id")*  
- **TickScriptIdList** (`TArray<FName>`): Scripts executed on each tick while the buff is active. *(Foreign = "Script_Buff.Id")*  
- **IntervalScriptIdList** (`TArray<FName>`): Additional scripts triggered on custom intervals. *(Foreign = "Script_Buff.Id")*  


## 📚 References

- [FB1BuffBasicInfo](./Struct/FB1BuffBasicInfo.md)
- [FB1BuffDisplayInfo](./Struct/FB1BuffDisplayInfo.md)