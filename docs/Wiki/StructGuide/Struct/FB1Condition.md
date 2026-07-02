## 🧩 Struct: FB1Condition

Represents a single condition used for simulation logic or script evaluation, including comparison type, target context, and input parameters.

### Properties

- **BaseObject** (`EB1BaseObject`): Specifies the object to evaluate the condition against (e.g., Self, Target).  
- **Command** (`EB1ConditionType`): The type of condition to evaluate (e.g., Stat, Trait, RelationshipStat).  
- **CompareType** (`EB1CompareType`): The type of comparison to apply (e.g., Equal, GreaterThan).  
- **S1** (`FName`): First string parameter, usually used to reference an ID or tag. *(SearchLink = "FB1Condition.Command")*  
- **S2** (`FName`): Second string parameter, used for secondary reference.  
- **F1** (`float`): First float parameter for numeric comparisons or thresholds.  
- **F2** (`float`): Second float parameter that often complements F1.  

## 📚 References

- [EB1BaseObject](../Enum/EB1BaseObject.md)
- [EB1ConditionType](../Enum/EB1ConditionType.md)
- [EB1CompareType](../Enum/EB1CompareType.md)