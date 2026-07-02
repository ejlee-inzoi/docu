## 🧩 Struct: FB1InheritedSkillInfo

Holds inherited skill data for a specific skill, across multiple levels.

### Properties

- **SkillId** (`FName`): The base skill to which the skills to be inherited belong. *(Foreign = "Skill.Id")*  
- **InheritedSkills** (`TArray<FB1InheritedSkill>`): A list of level-based inheritable skills for this skill.  

## 📚 References

- [FB1InheritedSkill](./FB1InheritedSkill.md)
- [Skill](../Skill.md)