## 🧩 Struct: FB1SkillLevelInfo

Defines a single level of a skill, including experience required, scripts, and display text.

### Properties

- **ListKey** (`FString`): Internal identifier for the level entry.  
- **Level** (`int32`): Level index. *(ClampMin = 0)*  
- **RequiredExp** (`float`): Experience needed to reach this level. *(ClampMin = 0)*  
- **StepStartScriptId** (`FName`): Script executed when this level is entered. *(Foreign = "Script_Skill.Id")*  
- **StepCompleteScriptId** (`FName`): Script executed when this level is completed. *(Foreign = "Script_Skill.Id")*  
- **DescTextId** (`FString`): Description of the level. *(StringTableKey)*  
- **LevelUpDisplayInfo** (`FB1LevelUpDisplayInfo`): UI display configuration shown when leveling up.  

## 📚 References

- [FB1LevelUpDisplayInfo](./FB1LevelUpDisplayInfo.md)
- [Script](../Script.md)