# 📘 Coop Data Guide

## 🧩 Struct: FB1CoopTableRow

Defines a cooperative interaction, including tasks, roles, and associated scripts for lifecycle events.

### Properties

- **Id** (`FName`): Unique identifier for the cooperative interaction.  
- **TaskInfos** (`TArray<FB1TaskInfo>`): List of task steps performed during the interaction.  
- **RoleInfos** (`TArray<FB1RoleInfo>`): List of role definitions required for this interaction.  
- **StartScriptIds** (`TArray<FName>`): Scripts executed at the beginning of the interaction. *(Foreign = "Script_Interaction.Id")*  
- **FinishScriptIds** (`TArray<FName>`): Scripts executed when the interaction ends. *(Foreign = "Script_Interaction.Id")*  
- **TimeOutDuration** (`int32`): Timeout value (in seconds) for the entire interaction.  


## 📚 References

- [FB1TaskInfo](./Struct/FB1TaskInfo.md)
- [FB1RoleInfo](./Struct/FB1RoleInfo.md)
- [FB1RolePlayingInfo](./Struct/FB1RolePlayingInfo.md)

- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)