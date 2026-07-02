# 📘 Quest Data Guide

## 🧩 Struct: FB1QuestTableRow

Defines a quest flow including all stages, category grouping, and completion rules.

### Properties

- **Id** (`FName`): Unique quest identifier.  
- **IsLazyComplete** (`bool`): Even if all missions are cleared, they can only be completed through a specific action.
For example, if IsLazyComplete is set to True, the mission can be completed by pressing the "Submit" button in the mission UI.
- **QuestCategoryId** (`FName`): Grouping category for this quest. *(Foreign = "QuestCategory.Id")*  
- **QuestList** (`TArray<FB1QuestInfo>`): Ordered list of quest stages and conditions.  


## 📚 References

- [FB1QuestInfo](./Struct/FB1QuestInfo.md)
- [FB1QuestTask](./Struct/FB1QuestTask.md)
- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)