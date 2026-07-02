# 📘 ObjectBp Data Guide

## 🧩 Struct: FB1ObjectBpTableRow

Defines blueprint-based placement object data, including size, slots, and component setup.

> 🛈 This structure is marked `ModHidden`.

### Properties

- **Id** (`FName`): Unique ID for this blueprint entry.  
- **ParentClass** (`FName`): Class name this object inherits from.  
- **BoxOriginOffset** (`FVector`): Offset of the bounding box origin from world center.  
- **Size** (`FVector`): Physical size of the object in world units.  
- **SlotComponents** (`TArray<FB1ObjectBpSlotData>`): Object slot data (for snapping or mounting).  
- **ComponentDatas** (`TArray<FB1ObjectBPComponentData>`): List of components used for rendering, logic, and interactivity.  
- **DetailType** (`EB2GameObjectDetailType`): Level of detail classification for rendering optimizations.  
- **EntranceTransform / ExitTransform** (`FTransform`): Positions used when entering or exiting the object.  


## 📚 References

- [FB1ObjectBpSlotData](./Struct/FB1ObjectBpSlotData.md)
- [FB1ObjectBPComponentData](./Struct/FB1ObjectBPComponentData.md)
- [FB1SlotComponentData](./Struct/FB1SlotComponentData.md)
- [FB1ObjectSlotData](./Struct/FB1ObjectSlotData.md)
- [FB1FxSlotData](./Struct/FB1FxSlotData.md)
- [FB1InteractionSlotData](./Struct/FB1InteractionSlotData.md)
- [FB1ExtraRequireSpaceSlotData](./Struct/FB1ExtraRequireSpaceSlotData.md)
- [EB1SloFXEffectType](./Enum/EB1SloFXEffectType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)
- [EB1ShowRequireSpaceType](./Enum/EB1ShowRequireSpaceType.md)