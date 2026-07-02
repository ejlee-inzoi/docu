## 🧩 Struct: FB1InheritedSkill

Defines inherited skill mappings that become available at a specific skill level.

### Properties

- **SkillLevel** (`int32`): The skill level at which the inheritance applies.  
- **InheritedSkillMap** (`TMap<FName, int32>`):  Mapping of skill IDs and skill levels inherited by this skill. *(Foreign = "Skill.Id")*  

## 📚 References

- [Skill](../Skill.md)