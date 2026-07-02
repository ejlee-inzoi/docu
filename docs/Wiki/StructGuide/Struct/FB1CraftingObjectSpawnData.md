## 🧩 Struct: FB1CraftingObjectSpawnData

Specifies what object is spawned during or after a crafting step, and how it behaves in the world.

### Properties

- **SpawnObjectId** (`FName`): ID of the object to be spawned (linked to Object or Food JSON files). *(Foreign = "Object.Id")*  
- **SpawnPoint** (`EB1CraftObjectSpawnPoint`): Defines where the object should appear (e.g., in hand, on table).  
- **TargetFilterInteractionId** (`FName`): Optional filter for selecting the spawn location or slot. *(Foreign = "TargetFilter.Id")*  
- **bIsCarriable** (`bool`): If true, the spawned object can be carried by a character.  

## 📚 References

- [EB1CraftObjectSpawnPoint](../Enum/EB1CraftObjectSpawnPoint.md)
- [Object](../Object.md)
- [TargetFilter](../TargetFilter.md)