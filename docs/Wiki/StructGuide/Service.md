# 📘 Service Data Guide

## 🧩 Struct: FB1ServiceTableRow

Defines service roles and visit behavior, including schedule flow and popup text configuration.

### Properties

- **Id** (`FName`): Unique identifier for the service entry.  
- **ServiceRoleInfos** (`TArray<FB1ServiceRoleInfo>`): List of service roles used during this service.  
- **VisitType** (`EB1ServiceVisitType`): Visit type used by the service (e.g., Personal, Site).  
- **GroupId** (`FName`): Group identifier used to logically organize related services.  
- **bKeepPushingSchedule** (`bool`): An option that keeps the service running until it is terminated by a designated trigger.
- **PersistentScheduleFinishConditions** (`TArray<FB1Condition>`): When bKeepPushingSchedule is True, this defines the set of conditions that determine when the service is considered complete.
- **VehicleMeshDescriptionTagId** (`FName`): Mesh tag used to spawn service vehicles. *(Foreign = "MeshSpawnTag.Id")*  
- **PendingPopupTextId** (`FString`): Message shown while the service is pending. *(Foreign = "Text_Message.Id")*  
- **AddingPopupTextId** (`FString`): Message shown when the service is being added. *(Foreign = "Text_Message.Id")*  
- **SuccessPopupTextId** (`FString`): Message shown when the service is successfully completed. *(Foreign = "Text_Message.Id")*  
- **FailurePopupTextId** (`FString`): Message shown when the service fails. *(Foreign = "Text_Message.Id")*  
- **TimeOutPopupTextId** (`FString`): Message shown when the service times out. *(Foreign = "Text_Message.Id")*  
- **FinishPopupTextId** (`FString`): Message shown at the final completion of the service. *(Foreign = "Text_Message.Id")*  


## 📚 References

- [FB1ServiceRoleInfo](./Struct/FB1ServiceRoleInfo.md)
- [EB1ServiceVisitType](./Enum/EB1ServiceVisitType.md)
- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)