# 📘 Posture Data Guide

## 🧩 Struct: FB1PostureTableRow

Defines posture types and their corresponding animations and scripts.

### Properties

- **Id** (`FName`): Unique identifier for the posture.  
- **PostureType** (`EB1PostureType`): Posture classification (e.g., Standing, Sit).  
- **DirectionInfos** (`TArray<FB1PostureDirectionInfo>`): List of posture animations by direction.  
- **StartScriptId** (`FName`): Script executed when posture begins. *(Foreign = "Script_Posture.Id")*  
- **EndScriptId** (`FName`): Script executed when posture ends. *(Foreign = "Script_Posture.Id")*  


## 📚 References

- [FB1PostureDirectionInfo](./Struct/FB1PostureDirectionInfo.md)
- [EB1PostureType](./Enum/EB1PostureType.md)
- [EB1SlotDirection](./Enum/EB1SlotDirection.md)