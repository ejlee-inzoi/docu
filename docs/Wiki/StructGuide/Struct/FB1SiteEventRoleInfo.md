## 🧩 Struct: FB1SiteEventRoleInfo

Defines a role within a site event, including conditions, participation limits, scripts, and activity behavior.

### Properties

- **ListKey** (`FString`): Internal identifier for this role entry.  
- **RoleId** (`FName`): Unique identifier for the role.  
- **NameTextId** (`FString`): Localized name of the role. *(StringTableKey)*  
- **RoleDescTextId** (`FString`): Localized description of the role. *(StringTableKey)*  
- **MoveType** (`EB1SiteEventMoveType`): Movement logic (e.g., Teleport, Walk).  
- **TeleportWaitMinute** (`int32`): Delay (in minutes) before teleporting after the event begins.  
- **RequiredRole** (`bool`): If true if this role is required for the event to proceed..  
- **IsFixedRole** (`bool`): Indicates whether this is a fixed role (not editable in the editor UI).  
- **MinRoleNum** (`int32`): Minimum number of participants required.  
- **MaxRoleNum** (`int32`): Maximum number of participants allowed.  
- **IsHostRole** (`bool`): If true, this is the host role in the event.  
- **RoleConditions** (`TArray<FB1Condition>`): Conditions to qualify for this role.  
- **ActivityInfo** (`FB1SiteEventRoleActivityInfo`): Activity preferences and dress code.  
- **CreateScriptInfos** (`TArray<FB1SiteEventScriptInfo>`): Scripts triggered at creation.  
- **ArrivedScriptInfos** (`TArray<FB1SiteEventScriptInfo>`): Scripts triggered on arrival.  
- **StartScriptInfos** (`TArray<FB1SiteEventScriptInfo>`): Scripts triggered at event start.  
- **CancelScriptInfos** (`TArray<FB1SiteEventScriptInfo>`): Scripts triggered if the role is canceled.  
- **FinishScriptInfos** (`TArray<FB1SiteEventScriptInfo>`): Scripts triggered on completion.  

## 📚 References

- [FB1Condition](./FB1Condition.md)
- [FB1SiteEventRoleActivityInfo](./FB1SiteEventRoleActivityInfo.md)
- [FB1SiteEventScriptInfo](./FB1SiteEventScriptInfo.md)