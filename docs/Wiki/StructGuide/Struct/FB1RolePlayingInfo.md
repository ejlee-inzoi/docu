## 🧩 Struct: FB1RolePlayingInfo

Defines a role-playing scenario assigned to a role, including timing and targeting.

### Properties

- **RoleId** (`FName`): ID of the role this scenario applies to.  
- **ScenarioInfos** (`TArray<FB1ScenarioInfo>`): Sequence of scenarios associated with this role.  
- **TimeOffset** (`int64`): Time offset (in milliseconds) applied when executing the role.  
- **RoleTargetFilterIds** (`TArray<FName>`): Target filters used to select candidates for this role. *(Foreign = "TargetFilter.Id")*  

## 📚 References

- [FB1ScenarioInfo](./FB1ScenarioInfo.md)
- [TargetFilter](../TargetFilter.md)