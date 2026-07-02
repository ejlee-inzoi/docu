## 🧩 Struct: FB1VehiclePart

Defines a configurable part of a vehicle, such as a door, window, or light, with multiple states and meshes.

### Properties

- **PartType** (`EB1VehiclePartType`): The type of vehicle part (e.g., Trunk, DriverWindow, Wiper).  
- **DefaultState** (`FName`): Name of the state this part starts in.  
- **MeshName** (`TArray<FName>`): Names of the meshes associated with this part.  
- **StateSettings** (`TArray<FB1VehiclePartState>`): List of possible states this part can switch between.  

## 📚 References

- [EB1VehiclePartType](../Enum/EB1VehiclePartType.md)
- [FB1VehiclePartState](./FB1VehiclePartState.md)