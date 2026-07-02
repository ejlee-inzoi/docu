# 📘 VehicleTemplate Data Guide

## 🧩 Struct: FB1VehicleTemplateTableRow

Defines a base template for vehicles, including blueprint, parts, and asset dimensions.

### Properties

- **Id** (`FName`): Unique identifier for the vehicle template.  
- **ObjectSelectionId** (`FName`): The ID of the interaction set to display when a vehicle is clicked. *(Foreign = "ObjectSelectionSet.Id")*  
- **Asset** (`TSoftObjectPtr<UBlueprint>`): Blueprint used as the main vehicle actor.  
- **PartList** (`TArray<FB1VehiclePart>`): Defines the mapping between vehicle parts and animations to control part movement.
- **AssetDescription** (`FB1VehicleAssetDescription`): Sets supplementary values or metrics associated with the vehicle.
- **PartMap** (`TMap<EB1VehiclePartType, FB1VehiclePartCache>`): Runtime mapping of parts, initialized at load.  


## 📚 References

- [FB1VehiclePart](./Struct/FB1VehiclePart.md)
- [FB1VehiclePartState](./Struct/FB1VehiclePartState.md)
- [FB1VehicleAssetDescription](./Struct/FB1VehicleAssetDescription.md)
- [EB1VehiclePartType](./Enum/EB1VehiclePartType.md)
- [EB1VehiclePartActionType](./Enum/EB1VehiclePartActionType.md)