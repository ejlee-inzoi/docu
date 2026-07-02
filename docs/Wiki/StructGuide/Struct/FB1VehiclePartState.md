## 🧩 Struct: FB1VehiclePartState

Defines a single state within a vehicle part, including its behavior and parameters.

### Properties

- **State** (`FName`): Name identifier for this state (e.g., Open, Closed).  
- **Type** (`EB1VehiclePartActionType`): Action to apply in this state (e.g., PlayStaticMeshAnim, ReversePlayStaticMeshAnim).  
- **S1** (`FName`): Optional parameter used by the action type. *(SearchLink = "FB1VehiclePartState.Type")*  

## 📚 References

- [EB1VehiclePartActionType](../Enum/EB1VehiclePartActionType.md)