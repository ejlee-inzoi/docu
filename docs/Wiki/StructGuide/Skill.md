# 📘 Skill Data Guide

## 🧩 Struct: FB1SkillTableRow

Defines a skill that can be acquired or leveled up by characters, including visuals and growth requirements.

### Properties

- **Id** (`FName`): Unique identifier for the skill.  
- **SkillDisplayInfo** (`FB1SkillDisplayInfo`): Display information such as name, icon, and description.  
- **SkillObjectIds** (`TArray<FName>`): IDs of objects associated with this skill. *(Foreign = "Object.Id")*  
- **GrowthStep** (`EB1GrowthStep`): Minimum growth stage required to access this skill.  
- **SkillLevelInfo** (`TArray<FB1SkillLevelInfo>`): List of level definitions and effects for this skill.  


## 📚 References

- [FB1SkillDisplayInfo](./Struct/FB1SkillDisplayInfo.md)
- [FB1SkillLevelInfo](./Struct/FB1SkillLevelInfo.md)
- [FB1LevelUpDisplayInfo](./Struct/FB1LevelUpDisplayInfo.md)
- [EB1GrowthStep](./Enum/EB1GrowthStep.md)