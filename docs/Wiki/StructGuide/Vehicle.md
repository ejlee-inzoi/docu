# 📘 Vehicle Data Guide

## 🧩 Struct: FB1VehicleTableRow

Defines a vehicle entity used in simulation, including appearance, template, and spawn settings.

### Properties

- **Id** (`FName`): Unique identifier for the vehicle.  
- **DisplayNameTextId** (`FString`): Localized name shown in the UI. *(StringTableKey = "Id")*  
- **DescriptionTextId** (`FString`): Localized description for the vehicle. *(StringTableKey = "Id")*  
- **VehicleTemplateId** (`FName`): Template this vehicle is based on. *(Foreign = "VehicleTemplate.Id")*  
- **Asset** (`TSoftObjectPtr<UBlueprint>`): Blueprint actor asset for the vehicle.  
- **StaticMeshAsset** (`TSoftObjectPtr<UStaticMesh>`): Static mesh representation of the vehicle.  
- **SimulationDriverMeshSetId** (`FName`): Optional driver mesh group ID.  
- **Icon** (`TSoftObjectPtr<UObject>`): Icon shown in selection UI.  
- **bPurchaseable** (`bool`): If true, this vehicle can be purchased.  
- **SimulationSpawnableLevel** (`TArray<FName>`): Specifies the level(s) where simulation vehicles—automatically spawned and driven—will appear. If set to "All", vehicles can spawn in every level. If specific level names are provided, vehicles will only be eligible for spawning in those designated levels. *(ModTip = "LevelName")*  
- **Price** (`int32`): Cost to purchase this vehicle.  
- **bDisableSimulationRandomVehicleColor** (`bool`): By default, simulation-spawned vehicles appear in random colors. However, if this value is set to True, they will spawn with the default color.
- **Color** (`TArray<FB1VehicleColorData>`): List of available vehicle colors.  
- **MovementSetting** (`FB1VehicleMovementSetting`): Driving and movement configuration.  


## 📚 References

- [FB1VehicleColorData](./Struct/FB1VehicleColorData.md)
- [FB1VehicleMovementSetting](./Struct/FB1VehicleMovementSetting.md)