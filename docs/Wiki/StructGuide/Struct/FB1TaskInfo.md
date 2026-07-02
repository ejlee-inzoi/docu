## 🧩 Struct: FB1TaskInfo

Defines a task entry including its step index, target filters, and role-playing data.

### Properties

- **Step** (`int32`): The step index of the task. *(ClampMin = 0, ClampMax = 999)*  
- **StepTargetFilterIds** (`TArray<FName>`): List of target filter IDs applied during this task step. *(Foreign = "TargetFilter.Id")*  
- **RolePlayingInfos** (`TArray<FB1RolePlayingInfo>`): List of role-playing configurations related to the task.  

## 📚 References

- [FB1RolePlayingInfo](./FB1RolePlayingInfo.md)
- [TargetFilter](../TargetFilter.md)