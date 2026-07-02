## 🧩 Struct: FB1StateInfo

Defines a single state entry, including lifecycle scripts and variation data.

### Properties

- **StateName** (`FName`): Represents the state it belongs to within the group.  
- **StartScriptId** (`FName`): Script executed when the state begins. *(Foreign = "Script_State.Id")*  
- **EndScriptId** (`FName`): Script executed when the state ends. *(Foreign = "Script_State.Id")*  
- **StateVariations** (`TArray<FB1StateVariationInfo>`): List of variations used to represent this state visually or behaviorally.  
- **bNeedTickUpdate** (`bool`): If true, the state requires per-frame updates.  

## 📚 References

- [FB1StateVariationInfo](./FB1StateVariationInfo.md)
- [Script](../Script.md)