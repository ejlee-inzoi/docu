# 📘 SkillInherit Data Guide

## 🧩 Struct: FB1SkillInheritTableRow

Defines which skills can be inherited by characters based on growth stage.

### Properties

- **Id** (`FName`): Unique identifier for this inheritance entry.  
- **EndGrowthStep** (`EB1GrowthStep`): Growth stage at which inheritance ends.  
- **InheritedSkillInfo** (`TArray<FB1InheritedSkillInfo>`): List of skills that can be inherited and their level mappings.  


## 📚 References

- [FB1InheritedSkillInfo](./Struct/FB1InheritedSkillInfo.md)
- [FB1InheritedSkill](./Struct/FB1InheritedSkill.md)
- [EB1GrowthStep](./Enum/EB1GrowthStep.md)