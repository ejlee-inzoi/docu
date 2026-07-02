# 📘 WorldMission Data Guide

## 🧩 Struct: FB1WorldMissionTableRow

Defines a mission that occurs globally or persistently in the world.

### Properties

- **Id** (`FName`): Unique identifier for the world mission.  
- **CheckType** (`EB1WorldMissionCheckType`): Defines the target scope for mission checks. (e.g., character, family, world)
- **bIsRepeat** (`bool`): If true, this mission can be completed multiple times.  
- **RepeatCount** (`int32`): Number of times the mission can be repeated. A value of -1 indicates unlimited repetitions.
- **Conditions** (`TArray<FB1MissionConditionData>`): Conditions evaluated to check whether the mission has been successfully completed.
- **CompleteMissionId** (`FName`): Script run when mission is completed. *(Foreign = "Script_WorldMission.Id")*  
- **PlayingNotOldestFamilySystemMessageId** (`FString`): If the mission is a Family mission and the currently active character is not the eldest member of the family, this is the system message ID to be shown. *(StringTableKey)*  


## 📚 References

- [FB1MissionConditionData](./Struct/FB1MissionConditionData.md)
- [EB1WorldMissionCheckType](./Enum/EB1WorldMissionCheckType.md)
- [EB1MissionCondition](./Enum/EB1MissionCondition.md)