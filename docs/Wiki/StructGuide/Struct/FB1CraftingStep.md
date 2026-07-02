## 🧩 Struct: FB1CraftingStep

Defines a single step within a crafting recipe, including interaction behavior and what object is produced.

### Properties

- **InteractionBagId** (`FName`): ID of the interaction bag used in this crafting step. *(Foreign = "InteractionBag.Id")*  
- **bShouldContinueInPreviousInteractingObject** (`bool`): If true, continues crafting in the previously used object or station.  
- **bResultFailContinue** (`bool`): If true, continues to the next step even if this step fails.  
- **SpawnData** (`FB1CraftingObjectSpawnData`): Specifies what object is created or placed during this step.  

## 📚 References

- [FB1CraftingObjectSpawnData](./FB1CraftingObjectSpawnData.md)
- [InteractionBag](../InteractionBag.md)